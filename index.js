function sinavsonuc(){
    try
    {
let not1=parseFloat(document.getElementById('vize').value);
let not2=parseFloat(document.getElementById('final').value);
let sonuc=(not1*0.3)+(not2*0.7);
if (sonuc<=100&&sonuc>=84) {
    document.getElementById('sonuc').textContent="AA - " + sonuc;
}
else if (sonuc>=77&&sonuc<83) {
    document.getElementById('sonuc').textContent="AB - " + sonuc;
}

else if (sonuc>=71&&sonuc<76) {
    document.getElementById('sonuc').textContent="BA - " + sonuc;
}

else if (sonuc>=66&&sonuc<70) {
    document.getElementById('sonuc').textContent="BB - " + sonuc;
}

else if (sonuc>=61&&sonuc<65) {
    document.getElementById('sonuc').textContent="BC - "+sonuc;
}

else if (sonuc>=56&&sonuc<60) {
    document.getElementById('sonuc').textContent="CB - " + sonuc;
}

else if (sonuc>=50&&sonuc<55) {
    document.getElementById('sonuc').textContent="CC - " + sonuc;
}

else if (sonuc>=46&&sonuc<49) {
    document.getElementById('sonuc').textContent="CD - " + sonuc;
}

else if (sonuc>=40&&sonuc<45) {
    document.getElementById('sonuc').textContent="DC - " + sonuc;
}

else if (sonuc>=30&&sonuc<39) {
    document.getElementById('sonuc').textContent="DD - " + sonuc;
}

else if (sonuc>=0&&sonuc<29) {
    document.getElementById('sonuc').textContent="FF - " + sonuc;
}
    }
    catch(exception) {
  document.getElementById("sonuc").innerHTML = exception.message;
}
}
// Initialize Lucide icons
//lucide.createIcons();


/*const fruits=['apples','oranges','pears'];
fruits[3]='grapes';
fruits.push('bananas');
fruits.unshift('melons');
fruits.pop();
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('melons'));
console.log(fruits);

const person = {
    firstName:'John', 
    lastName:'Doe', 
    ability:'Aura Manipulation', 
    powerLevel:7.6, 
    enemies:'Authorities'
}
const {firstName, lastName, ability, powerLevel} = person;
console.log(person);*/
/*--------------------------------------------------------------------------
 const todos = [
 {
    id:1, text:'Take out trash', isCompleted:true
 },
 {
    id: 2, text: 'Meeting with boss', isCompleted:true
 },
 {
    id:3, text: 'Dentist appt', isCompleted:false
 }
];*/

//console.log(todos[1].text);

//const todoJSON = JSON.stringify(todos);
//console.log(todoJSON);

//------------------------For loop------------------------------------------
//for (let i = 0; i < todos.length; i++) {
//    console.log(todos[i].text);
//}
//------------------------While Loop----------------------------------------
/*let i=0;
while (i<10) {
    console.log(`While Loop Number ${i}`);
    i++;
}*/
//------------------------For...of Loop-------------------------------------
/*for (let todo of todos) {
    console.log(todo.id);
    
}*/
//------------------------For Each Loop-------------------------------------
//todos.forEach(function(todo){
//console.log(todo.text)
//});
//--------------------------------------------------------------------------

//------------------------Map Loop-------------------------------------
/*const todoText = todos.map(function(todo){
return todo.text;
});
console.log(todoText);*/
//--------------------------------------------------------------------------

//------------------------Filter Loop-------------------------------------
/*const todoCompleted = todos.filter(function(todo){
return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;})
console.log(todoCompleted);*/
//--------------------------------------------------------------------------

//------------------------If-Else if-else statement-------------------------
//const x=11;
//const color = x >10 ? 'red' : 'blue';//if shortcut
//console.log(color);
/*if (x===10) {
    console.log('x is 10');
}
else if (x>10) {
    console.log('x is greater than 10')
}
else
{
    console.log('x is less than 10');
}*/

//--------------------------------------------------------------------------

//-------------------------functions and arrow functions--------------------
/* function addNums(num1=1, num2=1){
    return num1+num2;
}
addNums(5,55) */
/* const addNums = (num1=1, num2=1) => {//arrow function
    return num1 + num2;
}
console.log(addNums(5, 5)); */

//--------------------------------------------------------------------------

//Constructor function
/* function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

//Instantiate object
const person1 = new Person('John', 'Doe', '12-11-1991');
const person2 = new Person('Cadis Etrama', 'Di Raizel', '1-12-1950');

console.log(person2.getBirthYear());
console.log(person2.getFullName());*/

/* //Class
class Person{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

//Instantiate object
const person1 = new Person('John', 'Doe', '12-11-1991');
const person2 = new Person('Cadis Etrama', 'Di Raizel', '1-12-1950');

console.log(person2.getBirthYear());
console.log(person2.getFullName()); */
