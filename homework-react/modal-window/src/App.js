import React from "react";
import Button from "./components/Button";
import Modal from "./components/Modal";
import "./css/styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.titleForm = "";
    this.textForm = "";
    this.textBtnOk = "";
    this.textBtnCancel = "";
    this.classModifier = "";
    this.closeButton = true;

    this.state = { modalOpen: false };
    this.firstButtonClickHandler = this.firstButtonClickHandler.bind(this);
    this.secondButtonClickHandler = this.secondButtonClickHandler.bind(this);
    this.containerClickHandler = this.containerClickHandler.bind(this);
  }

  render() {
    return (
      <div>
        <Button
          text="Open first modal"
          backgroundColor={{ backgroundColor: "green" }}
          onClick={this.firstButtonClickHandler}
        />
        <Button
          text="Open second modal"
          backgroundColor={{ backgroundColor: "yellow" }}
          onClick={this.secondButtonClickHandler}
        />
        <Modal
          classActive={this.getClassActiveForModal()}
          header={this.titleForm}
          text={this.textForm}
          actions={this.getButtonsModal()}
          closeButton={this.closeButton}
          containerClick={this.containerClickHandler}
          classModifier={this.classModifier}
        />
      </div>
    );
  }

  firstButtonClickHandler() {
    this.titleForm = "Do you want to delete this file?";
    this.textForm =
      "Once you delete this file, it won’t be possible to undo this action. Are you sure you want to delete it?";
    this.textBtnOk = "Ok";
    this.textBtnCancel = "Cancel";
    this.classModifier = "";
    this.setState({ modalOpen: true });
  }

  secondButtonClickHandler() {
    this.titleForm = "Age control!";
    this.textForm = "Do you heve 18 years old?";
    this.textBtnOk = "Yes";
    this.textBtnCancel = "No";
    this.classModifier = "mod";
    this.closeButton = false;
    this.setState({ modalOpen: true });
  }

  containerClickHandler(event) {
    if (
      event.target.className === "form-container" ||
      event.target.className === "modal-form__close-btn"
    )
      this.setState({ modalOpen: false });
  }

  getClassActiveForModal() {
    return this.state.modalOpen ? { display: "block" } : { display: "none" };
  }

  getButtonsModal() {
    return [
      <button className={`form-btn ${this.classModifier}`}>
        {this.textBtnOk}
      </button>,
      <button className="form-btn">{this.textBtnCancel}</button>,
    ];
  }
}

export default App;
