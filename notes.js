/*
// 1. Varibles
var name = "Fredrik"; // Kan få nytt värde
let ager2 = 38; // block-scoped, måste definieras innan användning.
const country = "Sweden" // Kan inte få nytt värde


// 2. DATATYPES
// let {} = Object
let names = "Fredrik";
let age = 43;
let hobbies = ["Öl","Mat","barnen","Frun"];
let person = {
    name2: "Fredrik",
    age: 38,
};

// 3. basic operations
let x = 10;
let y = 5;

let sum = x + y;
let difference = x - y;
let product = x * y;
let quo = x / y;

console.log("Addition: " , difference);
console.log("Addition: " , x + y);

// assignment operator
let c = 5;
c += 2;
console.log("Add and assign:" , c);

c *= 3;
console.log("Multiply and assign" , c);

let d = 10, e = 20;
console.log("Equal: " , d == e);
console.log("Not Equal:" , d != e);
console.log("Strict Equal:" , d === 10);
console.log("Greater than:" , e > d);
console.log("Smaller than:" , e < d);

// logical operators
let g = 5, h = 10;
console.log("And (&&):", (g > 0 && h > 0));
console.log("OR (||):", (g > 10 || h > 0));
console.log("Not (!):", !(g > 0));

// String operattions
let firstName ="Fredrik";
let lastName = "Nordin";
let fullName = firstName + " " + lastName;
console.log("My name is" , fullName);
*/


/*
// Flow Statement
let temperature = 25;

if ( temperature > 30) {
    console.log("It's hot outside!")

}else if (temperature > 20) {
console.log("The weather is nice!")
}else {
    console.log("Damn, it's cold!")

}

*/


/*
// Switch statement, case
let day = "Monday";

switch (day){
    case "Monday":
        console.log("Start of the week");
        break;
    case "Wednesday":
        console.log("In the middle of the week");
        break;
    case "Friday":
        console.log("YEY! Soon some free time!")
        break;
    default:
        console.log("Enjoy your day!")
        // default = no break
}

*/
/*

//While Loop
for (let i =1 ; i <= 8; i++){
    console.log("Count: " , i);
}

//For Loop
let count = 1;
while (count <=8){
    console.log("While Count: " , count);
    count++;
}
*/

// FORM VALIDATION
function validateForm(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    // alert(name + " and e-mail is " + email);
    if (name === ""){
        alert("Please enter your name!")
        return false;
    }

    if (email === "" || !email.includes("@")){
        alert("Please enter a valid e-mail adress.")
        return false;

    }
    return true;

}

// alert("Thank you" + name + "!");
