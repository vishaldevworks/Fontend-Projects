const btn = document.querySelectorAll("button");
const output = document.querySelector("#output");

let count = 0;

btn[0].addEventListener("click", () => {
  if (count > 0) {
    count--;
    output.innerText = count;
  }
});

btn[1].addEventListener("click", () => {
  count++;
  output.innerText = count;
});

btn[2].addEventListener("click", () => {
  count = 0;
  output.innerText = count;
});
