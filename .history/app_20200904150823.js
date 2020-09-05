const input = document.querySelector("input");
let html = document.querySelector(".list");

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
               <li class="list-group-item flex">
                    <p>${input.value}</p>
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

// trash.addEventListener("click", (e) => {
//   const del = e.target.parentElement.parentElement
//   console.log(del);
// });

