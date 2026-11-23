const result = document.getElementById("result");
const btn = document.querySelectorAll("button");

//--Calculator Code--//
btn.forEach((button) => {
    button.addEventListener("click", (event) => {
        if((event.target.textContent === "AC")){
            result.value = "0";
        }
        else if (event.target.textContent === "DEL") {
            if (result.value.length > 1) {
                result.value = result.value.slice(0, -1);
            } else {
                result.value = "0";
            }
        }
        else if (event.target.textContent === "."){
            if(result.value.includes(".")){
                
            }else{
                result.value += (".");
            }
        }
        else if((result.value === "0")){
            result.value = event.target.textContent;
        }else{
            result.value += event.target.textContent;
        }
    })
});