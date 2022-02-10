console.log("ex3");

let num1 = parseInt(prompt("Enter number:"));
let num2 = parseInt(prompt("Enter another number:"));
let sum, diff, mul,div,mod;

if((num1%1) != 0||(num2%1) != 0)
{
    console.log("please input whole number");
}
else
{
    sum = num1 + num2;
    diff = num1 - num2;
    mul = num1 * num2;
    div = num1 / num2;
    mod = num1 % num2;

    console.log("Sum:", sum);
    console.log("Difference:", diff);
    console.log("Product:", mul);
    console.log("Quotient:", div);
    console.log("Mod:", mod);
}