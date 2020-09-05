const input = document.querySelector("input");
let html = document.querySelector(".list");

const form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  add();
});

const add = () => {
  let ul = `
          <ul class="list-group list-group-flush">
               <li>${input.value}</li>     
          </ul>
     `;
     ul.inn
};
