const input = document.querySelector("input");
let html = document.querySelector(".list");

const form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  add();
});

const add = () => {
if(input.value){
     return
}
  
  input.value = "";
  html.innerHTML += ul;
};
