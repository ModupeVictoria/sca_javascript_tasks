// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1, mmelloy0@psu.edu, Mitzi, F
// 2, kdiben1@tinypic.com, Kennan, M
// 3, kmummery2@wikimedia.org, Keven, M
// 4, gmartinson3@illinois.edu, Gannie, M
// 5, adaine5@samsung.com, Antonietta, F

// Example format of an intern object: 1, examples@you.edu, Example, F
const example = {
  id: 0,
  name: "Example",
  email: "examples@you.edu",
  gender: "M",
}
 
// Write your intern objects here:
const mitzi = {
  id: 1,
  name: "Mitzi",
  email:"mmelloy0@psu.edu",
  gender:"F",
}
const kennan = {
  id: 2,
  name: "Kennan",
  email:"kdiben1@tinypic.com",
  gender:"M",
  speak: function(){
    return "Hello, my name is " + " " + this.name + "!";
  }

}
const keven = {
  id: 3,
  name: "Keven",
  email:"kmummery2@wikimedia.org",
  gender:"M",
}
const gannie = {
  id: 4,
  name: "Gannie",
  email:"gmartinson3@illinois.edu",
  gender:"M",
}
const antonietta = {
  id: 5,
  name: "Antonietta",
  email:"adaine5@samsung.com",
  gender:"F",
  multiplyNums: function(num1,num2){
    return num1 * num2;
  }
}

// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
console.log("Mitzi's name")
  console.log(mitzi.name);
// Kennan's ID
console.log("Kennan's ID")
  console.log(kennan.id);
// Keven's email
console.log("Keven's email")
  console.log(keven.email);
// Gannie's name
console.log("Gannie's name")
  console.log(gannie.name);
// Antonietta's Gender
console.log("Antonietta's Gender")
  console.log(antonietta.gender);
// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
 // 
 //console.log(kennan.speak());
 
 console.log("Kennan have the ability to say Hello, my name is Kennan!")
console.log(kennan.speak());

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
//console.log(antonietta.multiplyNums(3,4));
console.log("Antonietta have the ability to multiply two numbers together and return the product.")
console.log(antonietta.multiplyNums(3,4));