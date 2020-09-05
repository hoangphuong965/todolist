const input = document.querySelector("input");
const edit = document.querySelector(".edit-btn");
let list = document.querySelector(".list");
window.addEventListener("DOMContentLoaded", getTasks);

const form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  add();
});

const add = () => {
  edit.style.display = "none";
  if (input.value.trim() === "") {
    alerts();
    return;
  } else {
    let ul = `
          <ol class="list-group list-group-flush ">
               <li class="list-group-item flex">
                    <p class="text">${input.value.trim()}</p>
                     <div class="icon">
                          <i clasi class="fa fa-pencil edit" aria-hidden="true"></i>
                          <i class="fa fa-trash trash" aria-hidden="true"></i>
                      </div>
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

// delete item
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("trash")) {
    edit.style.display = "none";
    let title = e.target.parentElement.previousElementSibling.textContent;
    let del = e.target.parentElement.parentElement.parentElement;
    removeLocal(title);
    del.remove();
  }
});

// edit item
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit")) {
    edit.style.display = "block";
    let title = e.target.parentElement.previousElementSibling.textContent;
    input.value = title;
    
    let items = getlocal();
    items.forEach(item => {
      item.;
    })


  }
  edit.addEventListener("click", (e) => {
    e.preventDefault();
    
    
  });
});

//================= local storage ===================

// add local
function addLocal(inputValue) {
  let tasks = inputValue;
  let items = localStorage.getItem("TaksList")
    ? JSON.parse(localStorage.getItem("TaksList"))
    : [];

  items.push(tasks);
  localStorage.setItem("TaksList", JSON.stringify(items));
}

// get local
function getlocal() {
  return localStorage.getItem("TaksList")
    ? JSON.parse(localStorage.getItem("TaksList"))
    : [];
}
// setup items
function getTasks() {
  let items = localStorage.getItem("TaksList")
    ? JSON.parse(localStorage.getItem("TaksList"))
    : [];

  items.forEach((item) => {
    let ul = `
          <ol class="list-group list-group-flush ">
               <li class="list-group-item flex">
                    <p class="text">${item}</p>
                     <div class="icon">
                          <i clasi class="fa fa-pencil edit" aria-hidden="true"></i>
                          <i class="fa fa-trash trash" aria-hidden="true"></i>
                      </div>
               </li> 
          </ol>
     `;
    list.innerHTML += ul;
  });
}

// remove items
function removeLocal(e) {
  let items = getlocal();
  items = items.filter((item) => {
    if (item !== e) {
      return items;
    }
  });
  localStorage.setItem("TaksList", JSON.stringify(items));
}
