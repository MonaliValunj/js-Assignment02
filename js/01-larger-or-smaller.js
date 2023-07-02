let num1 = parseInt(window.prompt("Enter first number : "));

let num2 = parseInt(window.prompt("Enter first number : "));

if(num1 > num2){
    document.write("Larger number is: "+ num1);
}else if(num2 > num1){
    document.write("Larger number is: "+ num2);
} else{
    document.write("Both numbers are equal");
}