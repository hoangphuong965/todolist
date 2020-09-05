const input = document.querySelector("input");
let list = document.querySelector(".list");

const form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  add();
});

const add = () => {
  if (input.value.trim() === "") {
    alerts();
    return;
  } else {
    let ul = `
          <ol class="list-group list-group-flush ">
               <li class="list-group-item flex">
                    <p>${input.value.trim()}</p>
                    <i class="fa fa-trash trash" aria-hidden="true"></i>
               </li> 
          </ol>
     `;
    input.value = "";
    list.innerHTML += ul;
  }
};

const alerts = () => {
  window.alert("điền vào ô trống");
};

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("trash")) {
    e.target.parentElement.parentElement.remove();
  }
});


// storage
