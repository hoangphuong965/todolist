const input = document.querySelector("input");
let html = document.querySelector(".list");

const form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  add();
});

let incres = 0;

const add = () => {
  let ul = `
          <ol  type="1">
               <li class="list-group-item">${input.value}</li>     
          </ol>
     `;
  input.value = "";
  html.innerHTML += ul;
};
