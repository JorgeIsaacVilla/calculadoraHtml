let operation = "";
let pantalla = document.getElementById("pantalla");

function addNumber (number){
    operation += number;
    pantalla.value = operation; 
}

function addOperator(operate){
    operation += operate;
    pantalla.value = operate;
}

function calculate(){
    try{
        operation = eval(operation);
        pantalla.value = operation;
    } catch (error){
        operation = "";
        pantalla.value = "!#F ERROR"
    }

}

function deleteAll(){
    operation = "";
    pantalla.value = operation;
}