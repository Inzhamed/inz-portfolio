let countEl = document.getElementById("count-el");

let count = 0;
function increment() {
  count++;
  countEl.innerText = count;
}
let saveEl = document.getElementById("save-el");

function save() {
  console.log("your score is : ", count);
  saveEl.textContent = saveEl.textContent + " " + count + " - ";
  countEl.innerText = 0;
  count = 0;
}
