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
          <ul class="list-group list-group-flush">
               <li  class="list-group-item">${input.value}</li>     
          </ul>
     `;
  input.value = "";
  html.innerHTML += ul;
};
