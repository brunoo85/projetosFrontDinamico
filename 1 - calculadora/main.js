// const result = document.getElementById("result");
const operator = document.getElementById("operator");
const numberValue = document.querySelectorAll(".keyNumber");
const equal = document.getElementById("equal");
let operadorEqual = false;


numberValue.forEach((number) =>
     number.addEventListener("click",() =>{
          if(operadorEqual){
               result.value="";
               operator.innerHTML="";
               operadorEqual=false;
               result.className="backWhite";
          }

               result.value = result.value+number.innerHTML;

          
     })
);

let calcu = document.querySelectorAll(".operatior");

let value1 =undefined;
let value2= undefined;
let value3=undefined;

let operadorActive = false;


calcu.forEach((calc) =>{
     calc.addEventListener("click", ()=>{
          if(operadorActive){
          }else{
               operator.innerHTML=calc.innerHTML;
               value1 = parseFloat(result.value);
               operadorActive=true;
               result.value = "";
          }
          
          if(!value1){
               value1=parseFloat(result.value);
          }
     })
})

equal.addEventListener("click",() =>{
     value2 = parseFloat(result.value);
     if(value1&&value2){
          switch (operator.innerHTML) {
               case "+":
                    value3 = value1+value2;
                    break;

               case "-":
                    value3 = value1-value2;
                    break;

               case "÷":
                    value3 = value1/value2;
                    break; 

               case "x":
                    value3 = value1*value2;
                    break;
               
               default:
                    console.log("deu algo errado");
                    break;
               
          }
          operator.innerHTML = "=";
          result.value = value3;
          operadorActive=false;
          operadorEqual=true;
          
          if(value3>20&&operadorEqual){
               result.className= "backGreen";
          }else if(operadorEqual){
               result.className= "backOrange";
               
          }
     }
})


keyClean.addEventListener("click", () =>{
     result.value ="";
     if(operadorEqual){
          operator.innerHTML="";
     }
})

