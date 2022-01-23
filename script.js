let button = document.querySelector(".button");
button.addEventListener("click",()=>{
    let text=document.querySelector(".text");

let newList = document.createElement("li");
newList.innerHTML=text.value;
let result = document.querySelector(".List").appendChild(newList);
});