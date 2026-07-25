/*

Imperative foreach v/s Declarative foreach
Imperative map v/s Declarative map
Implerative filter v/s Declarative filter
Imperative reduce v/s Declarative reduce
Imperative every v/s Declarative every
Imperative find v/s Declarative find
Sort

*/

// OOPS
// Asynchronous Programming

// let myArr = [1, 2, 3, 4, 99, 1000];

// let logicFn = (elem) => {
//     return elem % 2 === 0
// }

// function MyForEach(logic) {
//     let outputArr = [];
//     for (let i = 0; i < myArr.length; i++) {
//         if (logic(myArr[i])) {
//             outputArr.push(myArr[i])
//         }
//     }
//     return outputArr;
// }

// Array.prototype.OwnForEach = MyForEach

// let resultArr = myArr.OwnForEach((elem) => {
//     return elem % 2 !== 0
// })
// console.log(resultArr)

// let newArr = arr.filter(elem => elem % 2 === 0)
// console.log(newArr)

// let result = arr.every(elem => typeof elem === 'number')

// console.log(result);

// let result = arr.find((elem) => elem === 1000)
// console.log(result);


// imperative programming
// let arr = [1,2,3,4,5];
// let double = [];

// for(let i=0; i<arr.length; i++){
//     double.push(arr[i] * 2)
// }

// console.log(double)


// Declarative Programming
// let arr = [1, 2, 3, 4, 5];

// let double = arr.map(elem=>elem*2)

// console.log(double)

// PURE FUNCTIONS*****

// function sum(a, b){
//     let sum =  a + b;
//     return sum;
// }

// let result = sum(1,5)
// console.log(result)

// let total = 0;

// function increment(){
//     total++; // shared state
// }

// increment();


// Immutability
// let str = "manas";

// str[0] = 'Z'
// let zeroind = str[0];
// console.log(zeroind);
// console.log(str);


// let arr = [1,2,3,4,5];
// arr[0] = 1000;
// console.log(arr);


// let obj = {
//     age: 21,
//     name: 'Manas Kumar Lal'
// }


// function replaceName(name){
//     let newObj = {...obj, name}
//     return newObj
// }

// console.log(obj)
// let ReplacedObj = replaceName("Muskan");
// console.log(obj);
// console.log(ReplacedObj)

// const list = ["alu","gobi","kaddu"];


// function addItem(item){
//    const newList = [...list, item]
//    return newList;
// }

// // console.log(list)
// let newList = addItem("began")
// console.log(newList)
// // console.log(list);


// let arr = ["alu", "gobi", "kaddu"];

// function removeLastItem(arr) {
//     let newArr = arr.slice(0, -1)
//     return newArr;
// }

// let newArr = removeLastItem(arr);
// console.log(newArr)
// console.log(arr)



// ❌Avoid shared state

// let total = 0;

// function addAmout(amount){
//     total+=100 // total = total + 100
// }


// addAmout(100)
// console.log(total);


// function capitalizeFirstLetter(str) {
//     let newStr = str.charAt(0).toUpperCase() + str.slice(1);
//     return newStr;
// }

// let newStr = capitalizeFirstLetter("hello")
// console.log(newStr)


// Reuse and compose logic
// let name = "Manas Kumar lal"

// let toLower = str => str.toLowerCase();

// let removeSpaces = str => str.replaceAll(' ', '')

// let addAtTheRate = str => "@" + str

// function createUserName(str) {
//     return addAtTheRate(removeSpaces(toLower(str)))
// }

// let result = createUserName(name)
// console.log(result)


// Don't Iterate

// let arr = [1, 2, 5, 8, 10];

// let even = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         even.push(arr[i])
//     }
// }

// let evenArr = arr.filter(elem => elem % 2 == 0)

// console.log(even)
// console.log(evenArr)


// Loose Coupling

// let endPoint = "https://www.example.com"

// function fetchDate(endPoint, route) {
//     fetch(`${endPoint}/${route}`)
// }

// fetchDate(endPoint, user)
// fetchDate(endPoint, product)
// fetchDate(endPoint, reviews)

// function fetchDate(fn) {
//     let endPoint = "https://www.example.com";
//     fn(endPoint)
// }

// function getUser(endPoint){
//     fetch(`${endPoint}/user`)
// }

// function getProduct(endPoint){
//     fetch(`${endPoint}/product`)
// }

// fetchDate(getProduct)

// notification system

// function sendEmail(user){
//     console.log("Eail send to: ", user.email)
// }

// function sendSms(user){
//     console.log("SMS send to: ", user.phone)
// }

// function sendWpMsg(user){
//     console.log("MSG send on Whatsap to: ", user.phone)
// }


// let user = {
//     name: 'manas',
//     email: 'manaslal2004@gmail.com',
//     phone: 12341234242,
// }

// sendEmail(user)
// sendSms(user)
// sendWpMsg(user)


// function sendMessage (msg, sendTo){
//     console.log(`${msg} ${sendTo}`)
// }

// sendMessage("Eail send to:", user.email)
// sendMessage("SMS send to:", user.phone)
// sendMessage("WHATSAp send to:", user.phone)


// function sendEmail(user) {
//     console.log("Eail send to: ", user.email)
// }

// function sendSms(user) {
//     console.log("SMS send to: ", user.phone)
// }

// function sendWpMsg(user) {
//     console.log("MSG send on Whatsap to: ", user.phone)
// }


// function sendMessage(user, notifyFn) {
//     console.log("since You are authorized")
//     notifyFn(user)
// }

// let user1 = {
//     name: 'muskan',
//     email: 'muskan@gmail.com',
//     phone: 2343,
// }
// let user2 = {
//     name: 'faltu',
//     email: 'faltu@gmail.com',
//     phone: 26243663,
// }

// sendMessage(user1, sendEmail)
// sendMessage(user2, sendSms)


// first class, callback, higher order function


// function greetHello(){
//     return "Hello"
// }

// function greetNamaste(){
//     return "Namaste"
// }

// function greetWithName(fn, name){
//     return fn() + " " + name;
// }

// let result = greetWithName(greetHello, "Manas Kumar Lal")
// console.log(result);


// let faltu = function func() {
//     console.log("func1")
// }

// function HOD(cf) {
//     return cf
// }


// let result = HOD(faltu)
// result()


// Question2.

// let users = [
//     {
//         name: "mkl",
//         age:12,
//     },
//     {
//         name: "mkl",
//         age:12,
//     },
//     {
//         name: "mkl",
//         age:12,
//     },
// ]


// let transformedHTML = users.map(obj=>{
//     html = `
//     <div>
//         <p>{obj.name}</p>
//         <p>{obj.age}</p>
//     </div>
//     `

//     return html;
// })


// Q.n 3:

// let arr = [5, 10, 2, 3];

// let result = arr.reduce((acc, curr) => {
//     return acc + curr;
// }, 0)

// console.log(result)


// let user = {
//     name: 'manas',
//     age: 23
// }


// function updateName(user, name) {
//     let newObj = { ...user, name }
//     return newObj
// }

// let updatedObj = updateName(user, 'muskan')
// console.log(updatedObj)


// let str = "manas";
// let reverseString = str.split('').reverse().join('')
// console.log(reverseString);

// let add2 = num => num + 2;
// let multiply5 = num => num * 5;
// let subtract10 = num => num - 10;

// let result = subtract10(multiply5(add2(6)))
// console.log(result)


// compose -> right to left
// pipe -> left to right

// function compose(...fns) {
//     return function (val) {
//         return fns.reduceRight((acc, currFn) => {
//             return currFn(acc);
//         }, val)
//     }
// }

// // function pipe(...fns) {
// //     return function (val) {
// //         return fns.reduce((acc, currFn) => {
// //             return currFn(acc);
// //         }, val)
// //     }
// // }


// let result = compose(subtract10, multiply5, add2)(6)
// // let result2 = pipe(subtract10, multiply5, add2)(6)
// console.log(result)
// // console.log(result2)



// let arr = [1,2,3,4,5,6];

// let squareLogic = (r) =>{
//     return r*r
// }

// let cubeLogic = (r)=>{
//     return r*r*r
// }

// let diameterLogic = (r)=>{
//     return r*2;
// }

// let Calculate = function(logicFn){
//     let outputArr = [];
//     for(let i=0; i<arr.length; i++){
//        outputArr.push(logicFn(arr[i]))
//     }
//     return outputArr;
// }

// Array.prototype.ownMap = Calculate;

// let result = arr.ownMap(diameterLogic);
// console.log(result);

// let squareArr = Calculate(arr, squareLogic)
// let cubeArr = Calculate(arr, cubeLogic)
// let diameterArr = Calculate(arr, diameterLogic)

// let diamterArr = arr.map(diameterLogic)
// console.log(diamterArr)

// console.log(squareArr)
// console.log(cubeArr)
// console.log(diameterArr)

// function cube(arr){
//     let outputArr = [];
//     for(let i=0; i<arr.length; i++){
//        outputArr.push(arr[i] * arr[i] * arr[i])
//     }
//     return outputArr;
// }


// function diameter(arr){
//     let outputArr = [];
//     for(let i=0; i<arr.length; i++){
//        outputArr.push(2 * arr[i])
//     }
//     return outputArr;
// }

// let squareArr = square(arr);
// let cubeArr = cube(arr);
// let diameterArr = diameter(arr);

// console.log(squareArr)
// console.log(cubeArr)
// console.log(diameterArr)