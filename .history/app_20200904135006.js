const input = document.querySelector("input").value;

const form = document.querySelector(".form");
form.addEventListener('submit', (e) => {
     e.preventDefault()
     console.log(input);
})
