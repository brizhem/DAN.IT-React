import createModalCard from "./modal_visit.js";
import { closeModalCard } from "./modal_visit.js";
import createPost from "./classes.js";
import addEventListenerForFilters from "./filters.js";
import Cards from "./cards.js";

let btnShowModal = document.getElementById("show-modal");
let overlay = document.getElementById("overlay");
let selectDoctor = document.getElementById("doctor");
const submitButton = document.getElementById("submit-card-btn");
const editButton = document.getElementById("edit-card-btn");

//открытие модального окна для создания визита
btnShowModal.addEventListener("click", (event) => {
  event.preventDefault();
  modal2.open();
  overlay.classList.add("active");
  submitButton.classList.add("active");
  editButton.classList.remove("active");
  createModalCard();
  clearElemenValue();
});
//закрытие модального окна для создания визита при клике на поле вне его
overlay.addEventListener("click", function (event) {
  const visitElement = document.getElementById("visit_element");
  modal2.close();
  this.classList.remove("active");
  // selectDoctor.value = "none";
  closeModalCard();
  submitButton.classList.remove("active");
});
//закрытие модального окна для создания визита при клике на кнопку Х
document.addEventListener("click", async (event) => {
  let conditionModalCloseA = event.target.classList.contains("close-button");
  let conditionModalCloseB = event.target.classList.contains("fa-times");
  event.preventDefault();
  if (conditionModalCloseA || conditionModalCloseB) {
    modal2.close();
    // selectDoctor.value = "none";
    clearElemenValue();
    closeModalCard();
    overlay.classList.remove("active");
    submitButton.classList.remove("active");
  }
});
//отрисовка полей при переключении между значениями "врач"
selectDoctor.addEventListener("change", (event) => {
  event.preventDefault();
  createModalCard();
});

createPost();

//очистка полей карточки визита
function clearElemenValue() {
  const purpose = document.getElementById("purpose");
  const description = document.getElementById("description");
  const urgency = document.getElementById("urgensy");
  const patient = document.getElementById("patient");
  const pressure = document.getElementById("pressure");
  const bmi = document.getElementById("bmi");
  const heart_diseaes = document.getElementById("heart_diseaes");
  const age = document.getElementById("age");
  const last_visit = document.getElementById("last_visit");

  purpose.value = "";
  description.value = "";
  urgency.value = "none";
  patient.value = "";
  pressure.value = "";
  bmi.value = "";
  heart_diseaes.value = "";
  age.value = "";
  last_visit.value = "";
}

addEventListenerForFilters();

document.addEventListener("DOMContentLoaded", () => {
  const strCards = localStorage.getItem("strCards");

  if (!strCards) {
    const cards = new Cards();
    cards.getCards();
    return;
  }

  const arrCards = JSON.parse(strCards);

  const cards = new Cards(arrCards);
  cards.renderCards();
});
