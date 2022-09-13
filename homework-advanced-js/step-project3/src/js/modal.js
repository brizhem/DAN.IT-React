let btnShowModal = document.getElementById("show-modal");
let loginBtn = document.getElementById("login-btn");
let closeBtn = document.getElementById("close-btn");

class Modal {
  active = false;

  constructor(modalId) {
    this.modalId = modalId;
  }

  open() {
    if (this.active) return;

    const elModal = document.getElementById(`${this.modalId.modalId}`);

    if (elModal) {
      elModal.classList.add("active");
      this.active = true;
    }
  }

  close() {
    const elModal = document.getElementById(`${this.modalId.modalId}`);

    if (elModal) {
      elModal.classList.remove("active");
      this.active = false;
    }
  }

  login() {
    let login = document.getElementById("login");
    let password = document.getElementById("pass");
    let dataLog = login.value;
    let dataPass = password.value;

    if (dataLog !== "" && dataPass !== "") {
      fetch("https://ajax.test-danit.com/api/v2/cards/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: `${dataLog}`,
          password: `${dataPass}`,
        }),
      })
        .then((response) => response.text())
        .then((succes) => {
          const token = succes;
          if (
            token.length >= 32 ||
            token !== "Incorrect username or password"
          ) {
            if (!localStorage.getItem("token") !== null) {
              localStorage.setItem("token", token);
              window.location.href = "../privateOffice.html";
            } 
          } else {
            alert("Пожалуйста, введите правильный email и пароль");
          }
        })
        .catch((error) => console.log("error", error));
    } else {
      alert("Пожалуйста, заполните поле email и пароль");
    }
  }
}

const modal = new Modal({
  modalId: "login-modal",
});

const modal2 = new Modal({
  modalId: "visit_card",
});

btnShowModal.addEventListener("click", (e) => {
  modal.open();
});
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.login();
});
closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.close();
});

