const workDesk = document.getElementById("work_deck");
import { closeModalCard } from "./modal_visit.js";
import createModalCard from "./modal_visit.js";
class Visit {
  constructor(doctor, purpose, description, urgensy, patient, status) {
    this.doctor = doctor;
    this.purpose = purpose;
    this.description = description;
    this.urgensy = urgensy;
    this.patient = patient;
    this.status = status;
  }
}

class VisitDentist extends Visit {
  constructor(
    doctor,
    purpose,
    description,
    urgensy,
    patient,
    last_visit,
    status
  ) {
    super(doctor, purpose, description, urgensy, patient, status);
    this.last_visit = last_visit;
  }
}

class VisitCardiologist extends Visit {
  constructor(
    doctor,
    purpose,
    description,
    urgensy,
    patient,
    pressure,
    bmi,
    heart_diseaes,
    age,
    status
  ) {
    super(doctor, purpose, description, urgensy, patient, status);
    this.pressure = pressure;
    this.bmi = bmi;
    this.heart_diseaes = heart_diseaes;
    this.age = age;
  }
}

class VisitTherapist extends Visit {
  constructor(doctor, purpose, description, urgensy, patient, age, status) {
    super(doctor, purpose, description, urgensy, patient, status);
    this.age = age;
  }
}

function createPost() {
  let token = localStorage.getItem("token");

  if (!token) return;

  const baseUrl = "https://ajax.test-danit.com/api/v2/cards";

  let doctor = document.getElementById("doctor");
  let purpose = document.getElementById("purpose");
  let description = document.getElementById("description");
  let urgency = document.getElementById("urgensy");
  let patient = document.getElementById("patient");
  let pressure = document.getElementById("pressure");
  let bmi = document.getElementById("bmi");
  let heart_diseaes = document.getElementById("heart_diseaes");
  let age = document.getElementById("age");
  let last_visit = document.getElementById("last_visit");
  let status = document.getElementById("status");
  const submitButton = document.getElementById("submit-card-btn");

  submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    formValidation();

    switch (doctor.value) {
      case "therapist":
        const therapist = new VisitTherapist(
          doctor.value,
          purpose.value,
          description.value,
          urgency.value,
          patient.value,
          String(age.value),
          status.value
        );
        fetch(baseUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(therapist),
        })
          .then((response) => response.json())
          .then((response) => {
            let id = response.id;

            let visitCard = `<div class="cards-list__card" data-id="${id}">
                  <i id="delete-card" class="fas fa-times cards-list__card--btn-close"></i>
        
                  <div class="cards-list__card--content">
                    <p><span class='title'>????????????:</span>????????????????</p>
                    <p><span class='title'>??????:</span> ${response.patient}</p>
                  </div>
        
                  <div class="cards-list__card--content show_more hidden" id="content-show-more">
                    <p><span class='title'>??????????????????:</span> ${response.urgensy}</p>
                    <p><span class='title'>???????? ????????????:</span> ${response.purpose}</p>
                    <p><span class='title'>???????????????? ????????????:</span> ${response.description}</p>
                    <p><span class='title'>??????????????:</span> ${response.age}</p>
                  </div>
            
                      <button class="visit_card__btn active" id="show-more">???????????????? ????????????</button>
                      <button class="visit_card__btn active" id="edit-card">??????????????????????????</button>
              </div>`;
            workDesk.insertAdjacentHTML("afterbegin", visitCard);
            addCardToLocalStorage(response);
          })
          .catch((error) => console.error(error));

        break;

      case "dentist":
        const dentist = new VisitDentist(
          doctor.value,
          purpose.value,
          description.value,
          urgency.value,
          patient.value,
          last_visit.value,
          status.value
        );

        fetch(baseUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(dentist),
        })
          .then((response) => response.json())
          .then((response) => {
            let id = response.id;

            let visitCard = `<div class="cards-list__card" data-id="${id}">
          <i id="delete-card" class="fas fa-times cards-list__card--btn-close"></i>
        
          <div class="cards-list__card--content">
            <p><span class='title'>????????????:</span>??????????????</p>
            <p><span class='title'>??????:</span> ${response.patient}</p>
          </div>
        
          <div class="cards-list__card--content show_more hidden" id="content-show-more">
            <p><span class='title'>??????????????????:</span> ${response.urgensy}</p>
            <p><span class='title'>???????? ????????????:</span> ${response.purpose}</p>
            <p><span class='title'>???????????????? ????????????:</span> ${response.description}</p>
            <p><span class='title'>???????? ???????????????????? ??????????????????:</span> ${response.last_visit}</p>
          </div>
        
              <button class="visit_card__btn active" id="show-more">???????????????? ????????????</button>
              <button class="visit_card__btn active" id="edit-card">??????????????????????????</button>
        </div>`;
            workDesk.insertAdjacentHTML("afterbegin", visitCard);
            addCardToLocalStorage(response);
          })
          .catch((error) => console.error(error));
        break;

      case "cardiologist":
        const cardiologist = new VisitCardiologist(
          doctor.value,
          purpose.value,
          description.value,
          urgency.value,
          patient.value,
          pressure.value,
          bmi.value,
          heart_diseaes.value,
          String(age.value),
          status.value
        );

        fetch(baseUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(cardiologist),
        })
          .then((response) => response.json())
          .then((response) => {
            let id = response.id;

            let visitCard = `<div class="cards-list__card" data-id="${id}">
                  <i id="delete-card" class="fas fa-times cards-list__card--btn-close"></i>
        
                  <div class="cards-list__card--content">
                    <p><span class='title'>????????????:</span>??????????????????</p>
                    <p><span class='title'>??????:</span> ${response.patient}</p>
                  </div>
        
                  <div class="cards-list__card--content show_more hidden" id="content-show-more">
                    <p><span class='title'>??????????????????:</span> ${response.urgensy}</p>
                    <p><span class='title'>???????? ????????????:</span> ${response.purpose}</p>
                    <p><span class='title'>???????????????? ????????????:</span> ${response.description}</p>
                    <p><span class='title'>????????????????:</span> ${response.pressure}</p>
                    <p><span class='title'>??????:</span> ${response.bmi}</p>
                    <p><span class='title'>???????????????????????? ?????????????????????? ????????????????-???????????????????? ??????????????:</span> ${response.heart_diseaes}</p>
                    <p><span class='title'>??????????????:</span> ${response.age}</p>
                  </div>
            
                    <button class="visit_card__btn active" id="show-more">???????????????? ????????????</button>
                    <button class="visit_card__btn active" id="edit-card">??????????????????????????</button>
              </div>`;
            workDesk.insertAdjacentHTML("afterbegin", visitCard);
            addCardToLocalStorage(response);
          })
          .catch((err) => {
            console.error(err);
          });
        break;
    }

    modal2.close();
    overlay.classList.remove("active");
    closeModalCard();
  });
}

function addCardToLocalStorage(cardObj) {
  const strCards = localStorage.getItem("strCards");
  let arrCards = [];

  if (strCards !== "") {
    arrCards = JSON.parse(strCards);
  }

  arrCards.push(cardObj);
  localStorage.setItem("strCards", JSON.stringify(arrCards));
}

export function formValidation(event) {
  if (purpose.value == "") {
    alert("?????????????? ???????? ????????????");
    event.stopPropagation();
    modal2.open();
    overlay.classList.add("active");
    createModalCard();
  } else if (description.value == "") {
    alert("?????????????? ???????????????? ????????????");
    event.stopPropagation();
    modal2.open();
    overlay.classList.add("active");
    createModalCard();
  } else if (patient.value == "") {
    alert("?????????????? ?????? ????????????????");
    event.stopPropagation();
    modal2.open();
    overlay.classList.add("active");
    createModalCard();
  } else if (age.value == "") {
    alert("?????????????? ?????????????? ????????????????");
    event.stopPropagation();
    modal2.open();
    overlay.classList.add("active");
    createModalCard();
  } else if (doctor.value == "dentist" && last_visit.value == "") {
    alert("?????????????? ???????? ???????????????????? ????????????");
    event.stopPropagation();
    modal2.open();
    overlay.classList.add("active");
    createModalCard();
  } else if (doctor.value == "cardiologist" && pressure.value == "") {
    alert("?????????????? ???????????? ???????????????? ????????????????");
    event.stopPropagation();
    modal2.open();
    overlay.classList.add("active");
    createModalCard();
  } else if (doctor.value == "cardiologist" && pressure.value == "") {
    alert("?????????????? ?????? ????????????????");
    event.stopPropagation();
    modal2.open();
    overlay.classList.add("active");
    createModalCard();
  } else if (doctor.value == "cardiologist" && heart_diseaes.value == "") {
    alert("?????????????? ???????????? ?? ?????????????????? ???????????????????????? ????????????????");
    event.stopPropagation();
    modal2.open();
    overlay.classList.add("active");
    createModalCard();
  } else {
    return false;
  }
}

export default createPost;
