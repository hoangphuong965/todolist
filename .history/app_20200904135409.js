const input = document.querySelector("input");
const html = document.querySelector(".list");

const form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  add();
});

const add = () => {
  html = `
          <ul class="list-group list-group-flush">
               <li>     
          </ul>
     `;

};
