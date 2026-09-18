const textarea = document.querySelector("#area");

const count = document.querySelector("#count");

const btn = document.querySelector("button");

textarea.addEventListener("input" , () => {

    count.innerText = textarea.value.length;

});

btn.addEventListener("click" , () => {
    textarea.value= "";
    count.textContent = "0";
})