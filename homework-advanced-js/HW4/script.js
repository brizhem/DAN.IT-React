function get(url, queryParams) {
  const queryParamsString = new URLSearchParams(queryParams);

  return fetch(`${url}${!!queryParams ? "?" + queryParamsString : ""}`).then(
    (response) => {
      if (response.ok) {
        return response.json();
      } else {
        return new Error("invalid data");
      }
    }
  );
}

function getFilms() {
  get("https://ajax.test-danit.com/api/swapi/films").then((filmsArr) => {
    const rootElement = document.querySelector("body");

    filmsArr.sort(function (a, b) {
      if (a.episodeId > b.episodeId) {
        return 1;
      }
      if (a.episodeId < b.episodeId) {
        return -1;
      }
      return 0;
    });

    filmsArr.forEach(({ episodeId, name, openingCrawl, characters }) => {
      const elFilm = document.createElement("div");

      elFilm.insertAdjacentHTML(
        "beforeend",
        `<h2>${episodeId}</h2>
         <h3>${name}</h3>
         <p>${openingCrawl}</p>`
      );

      rootElement.insertAdjacentElement("beforeend", elFilm);
      getCharactersOfFilm(characters, elFilm);
    });
  });
}

function getCharactersOfFilm(arrCharacters, elFilm) {
  const elListCharacters = document.createElement("ol");
  elListCharacters.insertAdjacentText("afterbegin", "Characters:");

  arrCharacters.forEach((url) => {
    get(url).then(({ name }) => {
      elListCharacters.insertAdjacentHTML("beforeend", `<li>${name}</li>`);
    });

    elFilm.insertAdjacentElement("beforeend", elListCharacters);
  });
}

getFilms();
