const input = document.querySelector("input");
let list = document.querySelector(".list");
window.addEventListener("DOMContentLoaded", setupItems)

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
    addLocal(input.value);
    input.value = "";
    list.innerHTML += ul;
  }
};

const alerts = () => {
  window.alert("Fill In The Blank 👌");
};

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("trash")) {
    e.target.parentElement.parentElement.remove();
  }
});

//================= local storage ===================

// add local
function addLocal(task) {
  let tasks = task;
  let items = localStorage.getItem("TaksList")
    ? JSON.parse(localStorage.getItem("TaksList"))
    : [];

  items.push(tasks);
  localStorage.setItem("TaksList", JSON.stringify(items));
}

// get local
function getlocal() {
  return localStorage.getItem("TaksList")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}
 // set