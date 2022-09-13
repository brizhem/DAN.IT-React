let generalBlock = document.getElementById("general");
let cardiologitstBlock = document.getElementById("cardiologist_block");
let dentistBlock = document.getElementById("dentist_block");
const ageBlock = document.getElementById("age_block");
const submitButton = document.getElementById("submit-card-btn");

function createModalCard() {
  generalBlock.classList.add("active");

  let doctor = document.getElementById("doctor").value;

  switch (doctor) {
    case "cardiologist":
      cardiologitstBlock.classList.add("active");
      ageBlock.classList.add("active");
      dentistBlock.classList.remove("active");
      break;

    case "dentist":
      dentistBlock.classList.add("active");
      cardiologitstBlock.classList.remove("active");
      ageBlock.classList.remove("active");
      break;

    case "therapist":
      ageBlock.classList.add("active");
      cardiologitstBlock.classList.remove("active");
      dentistBlock.classList.remove("active");
      break;
  }
}

export function closeModalCard() {
  generalBlock.classList.remove("active");
  terapistBlock.classList.remove("active");
  cardiologitstBlock.classList.remove("active");
  dentistBlock.classList.remove("active");
  submitButton.classList.add("active");
}

export default createModalCard;
