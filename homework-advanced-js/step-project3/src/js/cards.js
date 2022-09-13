class Cards {
  constructor(arrCards) {
    this.arrCards = arrCards;
  }

  renderCards() {
    const cardsList = document.querySelector(".cards-list");
    cardsList.innerHTML = "";

    this.arrCards.forEach((card) => {
      const html = `<div class="cards-list__card" data-id="${card.id}">
                  <i id="delete-card" class="fas fa-times cards-list__card--btn-close"></i>
        
                  <div class="cards-list__card--content">
                    <p><span class='title'>Доктор:</span> ${card.doctor}</p>
                    <p><span class='title'>Пациент:</span> ${card.patient}</p>
                  </div>
        
                  <div class="cards-list__card--content show_more hidden" id="content-show-more">
                    ${this.insertCardContent(card)}  
                  </div>
            
                    <button class="visit_card__btn active" id="show-more">Показать больше</button>
                    <button class="visit_card__btn active" id="edit-card">Редактировать</button>
              </div>`;
      cardsList.insertAdjacentHTML("afterbegin", html);
    });
  }

  getCards() {
    const token = localStorage.getItem("token");

    if (!token) return;

    fetch("https://ajax.test-danit.com/api/v2/cards", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((arr) => {
        localStorage.setItem("strCards", JSON.stringify(arr));
        this.arrCards = arr;
        this.renderCards();
      })
      .catch((err) => console.error(err));
  }

  insertCardContent(card) {
    let html = "";

    for (let key in card) {
      if (key === "doctor" || key === "patient" || key === "id") continue;
      html =
        html +
        `<p><span class='title'>${this.getTitleField(key)}:</span> ${
          card[key]
        }</p>`;
    }

    return html;
  }
  _last_visit;
  getTitleField(key) {
    switch (key) {
      case "urgensy":
        return "Срочность";
      case "purpose":
        return "Цель визита";
      case "description":
        return "Описание визита";
      case "pressure":
        return "Давление";
      case "bmi":
        return "ИМТ";
      case "heart_diseaes":
        return "Перенесенные заболевания сердечно-сосудистой системы";
      case "age":
        return "Возраст";
      case "last_visit":
        return "Дата последнего посещения";
      case "status":
        return "Статус";
    }
  }
}

export default Cards;
