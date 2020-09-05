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
               <li class="list-group-item">Cras justo odio </li>
               <li class="list-group-item">Dapibus ac facilisis in</li>
               <li class="list-group-item">Morbi leo risus</li>
               <li class="list-group-item">Porta ac consectetur ac</li>
                         <li class="list-group-item">Vestibulum at eros</li>                        
          </ul>
     `;
};
