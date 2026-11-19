const result = document.getElementById("result");
const btn = document.querySelectorAll("button");

btn.forEach((button) => {
    button.addEventListener("click", (event) => {
        if((event.target.textContent === "AC")){
            result.value = "0";
        }
        else if((result.value === "0")){
            result.value = event.target.textContent;
        }else{
            result.value += event.target.textContent;
        }
    })
});