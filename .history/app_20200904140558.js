const input = document.querySelector("input");
let html = document.querySelector(".list");

const form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  add();
});


const add = () => {
  let ul = `
          <ol class="list-group list-group-flush">
               <li class="list-group-item">${input.value}</li> 
                   
          </ol>
     `;
  input.value = "";
  html.innerHTML += ul;
};
