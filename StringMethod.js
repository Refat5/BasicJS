let details = {
    Name : 'Abdur Rahim Refat',
    age :43,
    height :  "5.9'",
}
let bd = "this is my name Bangladesh";

/// Slice Method 

let Name = "Refat, Tanvir, Fahad, Hello";


// document.getElementById('strmethod').innerHTML = Name.slice(14,20);
// document.getElementById('strmethod').innerHTML = Name.slice(-14 , -10);

//substring Method (prothome ta bad diye de then pore za value deya hoy ta 0 theke count kore )


let Country = "Bangladesh, Pakistan, Austalia";

// console.log(Country.substr(11, 16));
// console.log(Country.substring(11, 1));

// document.getElementById('strmethod').innerHTML = Country.substr(11, 16);
// document.getElementById('strmethod').innerHTML = Country.substring(11, 16);

//Replace method 

// let text1 = "I love You";
// let text2 = "meri Jan";
// let finalText = text1 +" " + text2 ;


// var text = "I love You 3";
// ///it's return error text is already declared
// var text = "I love You";
// var text = "I love You 3";

//it's replace the text value and return the lates value of text

// let newLove = text.replace('You','All');


//document.getElementById('strmethod').innerHTML = text.toUpperCase();
// document.getElementById('strmethod').innerHTML = text.toLocaleLowerCase();

// console.log(text);
// document.getElementById('strmethod').innerHTML = text;

// trim() method (method removes whitespace from both sides of a string )

// let text1 = "      Hello World!      ";
// let text2 = text1.trim();

// document.getElementById('strmethod').innerHTML = text2;

// padStart() padEnd() method //2017

// let text= "3";
// let padadd = text.padStart(5,0);
// let padadd2 = text.padEnd(33,0);

// document.getElementById('strmethod').innerHTML = padadd2;
// document.getElementById('strmethod').innerHTML = padadd2;

// let text = "HELLO Refat";
// let char = document.getElementById('strmethod').innerHTML = text[0];

let text = "Hello Refat";
const myArr = text.split("");
console.log(myArr);
document.getElementById('strmethod').innerHTML = myArr;

// text = "";
// for (let i = 0; i < myArr.length; i++) {
//   text += myArr[i] + "<br>"
// }
// document.getElementById('strmethod').innerHTML = text;
