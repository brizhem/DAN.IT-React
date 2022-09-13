import createModalCard from "./modal_visit.js";
import Cards from "./cards.js";
import { formValidation } from "./classes.js";

const cardsList = document.querySelector(".cards-list");
const editButton = document.getElementById("edit-card-btn");
const elCardId = document.getElementById("card-id");

class Card {
  arrCards = [];

  constructor(elCard, currentId) {
    this.elCard = elCard;
    this.currentId = currentId;
  }

  showMoreClick() {
    const elShowMoreContent = this.elCard.querySelector("#content-show-more");
    elShowMoreContent.classList.remove("hidden");
  }

  editCardClick() {
    const elDoctor = document.getElementById("doctor");
    const submitButton = document.querySelector(".create_visit__btn");
    const currentCard = this.getCurrentCard();

    if (!currentCard) return;

    this.updateValueFormElement(currentCard);
    createModalCard();
    submitButton.classList.remove("active");
    editButton.classList.add("active");
    elCardId.value = this.currentId;

    modal2.open();
  }

  updateValueFormElement(card) {
    for (let key in card) {
      const elementForm = document.getElementById(key);

      if (!elementForm) {
        console.log("element " + key + " not found");
        continue;
      }

      elementForm.value = card[key];
    }
  }

  deleteCard() {
    const currentCard = this.getCurrentCard();
    const token = localStorage.getItem("token");

    if (!currentCard) return;

    fetch(`https://ajax.test-danit.com/api/v2/cards/${this.currentId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      if (response.status === 200) {
        const cardIndex = this.arrCards.indexOf(currentCard);

        this.arrCards.splice(cardIndex, 1);
        localStorage.setItem("strCards", JSON.stringify(this.arrCards));
        this.elCard.remove();
      }
    });
  }

  getArrayCards() {
    const strCards = localStorage.getItem("strCards");

    if (!strCards) return;

    this.arrCards = JSON.parse(strCards);
  }

  getCurrentCard() {
    this.getArrayCards();

    if (!this.arrCards) return undefined;

    const currentCard = this.arrCards.find((card) => {
      const { id } = card;
      if (id == this.currentId) return card;
    });

    return currentCard;
  }
}

cardsList.addEventListener("click", (event) => {
  if (event.target.id === "show-more") {
    const elCard = event.target.parentElement;
    const card = new Card(elCard, elCard.dataset.id);
    card.showMoreClick();
    event.target.remove();
  } else if (event.target.id === "delete-card") {
    const elCard = event.target.parentElement;
    const card = new Card(elCard, elCard.dataset.id);
    card.deleteCard(elCard, elCard.dataset.id);
  } else if (event.target.id === "edit-card") {
    const elCard = event.target.parentElement;
    const card = new Card(elCard, elCard.dataset.id);
    card.editCardClick(elCard, elCard.dataset.id);
  }
});

editButton.addEventListener("click", (event) => {
  formValidation();

  event.preventDefault();
  const token = localStorage.getItem("token");

  if (!token) return;

  const card = new Card(undefined, elCardId.value);
  const currentCard = card.getCurrentCard();
  const index = card.arrCards.indexOf(currentCard);
  const arrFormElements = document.querySelectorAll(".patient_info");
  const elDoctor = document.getElementById("doctor");
  const elUrgency = document.getElementById("urgensy");
  const elStatus = document.getElementById("status");

  arrFormElements.forEach((element) => {
    if (element.value) {
      currentCard[element.name] = element.value;
    }
  });

  currentCard.doctor = elDoctor.value;
  currentCard.urgensy = elUrgency.value;
  currentCard.status = elStatus.value;

  fetch("https://ajax.test-danit.com/api/v2/cards/" + elCardId.value, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(currentCard),
  })
    .then((response) => response.json())
    .then((obj) => {
      card.arrCards[index] = currentCard;
      localStorage.setItem("strCards", JSON.stringify(card.arrCards));
      modal2.close();
      const cards = new Cards(card.arrCards);
      cards.renderCards();
    })
    .catch((err) => console.error(err));
});

export default Card;
