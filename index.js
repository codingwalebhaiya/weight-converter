const inputEl = document.getElementById("input");
const errorEl = document.getElementById("error");
const resultEl = document.getElementById("result")
let errorTime;
let resultTime;

function updateResult(){
if(inputEl.value <= 0 || isNaN(inputEl.value)){
    errorEl.innerHTML = "Please enter a valid number!"

    clearTimeout(errorTime);
    errorTime = setTimeout(()=>{
        errorEl.innerHTML = "";
        inputEl.value = "";
    },2000);
  }else{ 
    resultEl.innerText = (+inputEl.value /2.2).toFixed(2);

    clearTimeout(resultTime);
    resultTime = setTimeout(()=>{
      resultEl.innerHTML = "";
      inputEl.value = "";
    }, 10000);

  }
}

inputEl.addEventListener("input",updateResult);