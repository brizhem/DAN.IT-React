import Cards from "./cards.js";

const elFilterUrgensy = document.getElementById("filter-urgensy");
const elFilterStatus = document.getElementById("filter-status");
const elFilterTitle = document.getElementById("filter-title");
const elFilterDescription = document.getElementById("filter-description");

function addEventListenerForFilters() {
  elFilterUrgensy.addEventListener("change", changeFiltersHandler);

  elFilterStatus.addEventListener("change", changeFiltersHandler);

  elFilterTitle.addEventListener("change", changeFiltersHandler);

  elFilterDescription.addEventListener("change", changeFiltersHandler);
}

function changeFiltersHandler(event) {
  const strCards = localStorage.getItem("strCards");
  let arrCards = JSON.parse(strCards);

  if (!!elFilterUrgensy.value) {
    arrCards = arrCards.filter(
      ({ urgensy }) => urgensy === elFilterUrgensy.value
    );
  }

  if (!!elFilterStatus.value) {
    arrCards = arrCards.filter(({ status }) => status === elFilterStatus.value);
  }

  if (!!elFilterTitle.value) {
    arrCards = arrCards.filter(({ purpose }) => {
      let titile = purpose.toLowerCase();
      let searchStr = elFilterTitle.value.toLowerCase();
      return titile.indexOf(searchStr) !== -1;
    });
  }

  if (!!elFilterDescription.value) {
    arrCards = arrCards.filter(({ description }) => {
      let descriptionLc = description.toLowerCase();
      let searchStr = elFilterDescription.value.toLowerCase();
      return descriptionLc.indexOf(searchStr) !== -1;
    });
  }

  const cards = new Cards(arrCards);
  cards.renderCards();
}

export default addEventListenerForFilters;
