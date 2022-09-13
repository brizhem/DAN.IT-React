const btnIdCalculate = document.getElementById("idCalculate");

btnIdCalculate.addEventListener("click", clickHandler);

async function clickHandler(event) {
  const elContainer = document.querySelector(".address-container");
  elContainer.innerHTML = "";

  const { ip } = await getIp();

  const data = await getAddress(ip);

  if ((data.status = "success")) {
    const { continent, country, regionName, city, district } = data;

    elContainer.insertAdjacentHTML(
      "beforeend",
      `<ul>
        <li><span>Continent:</span> ${continent}</li>
        <li><span>Country:</span> ${country}</li>
        <li><span>Region:</span> ${regionName}</li>
        <li><span>City:</span> ${city}</li>
        <li><span>District:</span> ${district}</li>
      </ul>`
    );
  } else {
    console.error(data.message);
  }
}

function getIp() {
  return fetch("https://api.ipify.org/?format=json").then((rsp) => rsp.json());
}

function getAddress(ip) {
  return fetch(
    "http://ip-api.com/json/" +
      ip +
      "?fields=status,message,continent,country,regionName,city,district"
  ).then((rsp) => rsp.json());
}
