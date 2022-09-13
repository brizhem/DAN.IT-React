import React from "react";
// import Button from "./components/Button";
import Modal from "./components/Modal";
import getItems from "./api/items";
import CardsList from "./components/CardsList";
import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.titleForm = "";
    this.textForm = "";
    this.textBtnOk = "";
    this.textBtnCancel = "";
    this.classModifier = "";
    this.closeButton = true;
    this.cardId = "";

    this.state = { modalOpen: false, listItems: [] };
    this.containerClickHandler = this.containerClickHandler.bind(this);
    this.addToCardClickHandler = this.addToCardClickHandler.bind(this);
    this.okButtonClickHendler = this.okButtonClickHendler.bind(this);
  }

  componentDidMount() {
    getItems().then((rsp) => this.setState({ listItems: rsp }));
  }

  render() {
    return (
      <div>
        <CardsList
          cards={this.state.listItems}
          addToCardClickHandler={this.addToCardClickHandler}
        />
        <Modal
          classActive={this.getClassActiveForModal()}
          header={this.titleForm}
          title={this.titleForm}
          actions={this.getButtonsModal()}
          closeButton={this.closeButton}
          containerClick={this.containerClickHandler}
          classModifier={this.classModifier}
          cardId={this.cardId}
        />
      </div>
    );
  }

  addToCardClickHandler(e) {
    this.titleForm = "Add product to basket?";
    this.textBtnOk = "Ok";
    this.textBtnCancel = "Cancel";
    this.classModifier = "mod";
    this.cardId = e.target.parentElement.id;
    this.setState({ modalOpen: true });
  }

  containerClickHandler(event) {
    event.preventDefault();
    console.log(event);
    if (
      event.target.className === "form-container" ||
      event.target.className === "modal-form__close-btn" ||
      event.target.className.includes("form-btn")
    )
      this.setState({ modalOpen: false });
  }

  okButtonClickHendler(e) {
    e.preventDefault();

    let basketProductsStr = localStorage.getItem("basketProducts");
    let basketProducts = [];
    const currentId = this.cardId;

    if (!!basketProductsStr) basketProducts = JSON.parse(basketProductsStr);

    let crad = basketProducts.find((id) => id === currentId);

    if (!crad) basketProducts.push(currentId);
    localStorage.setItem("basketProducts", JSON.stringify(basketProducts));

    this.setState({ modalOpen: false });
  }

  getClassActiveForModal() {
    return this.state.modalOpen ? { display: "block" } : { display: "none" };
  }

  getButtonsModal() {
    return [
      <button
        className={`form-btn ${this.classModifier}`}
        onClick={this.okButtonClickHendler}
      >
        {this.textBtnOk}
      </button>,
      <button className="form-btn" onClick={this.containerClickHandler}>
        {this.textBtnCancel}
      </button>,
    ];
  }
}

export default App;
