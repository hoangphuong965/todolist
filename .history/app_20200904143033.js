const input = document.querySelector("input");
let html = document.querySelector(".list");
const trash = document.querySelector("i");

const form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  add();
});

const add = () => {
  if (input.value === "") {
    alerts();
    return;
  } else {
    let ul = `
          <ol class="list-group list-group-flush ">
               <li class="list-group-item grid">
                    <p>${input.value}</p>
                    <i class="fa fa-trash" aria-hidden="true"></i>
               </li> 
          </ol>
     `;
    input.value = "";
    html.innerHTML += ul;
  }
};

const alerts = () => {
  window.alert("điền vào ô trống");
};

const 
