const user1 = {
  name: "John",
  years: 30,
};

const { name, years: age, isAdmin = false } = user1;

const rootElement = document.querySelector("body");
const html = `<ul>
                <li>name: ${name}</li>
                <li>age: ${age}</li>
                <li>is Admin: ${isAdmin}</li>
            </ul>`;

rootElement.insertAdjacentHTML("afterbegin", html);
