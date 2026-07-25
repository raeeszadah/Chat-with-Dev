// 16. *****
// console.log(parseInt("123.3453"))
// console.log(Number("123.3453"))


// console.log(parseInt("123.234px"))
// console.log(Number("123.234px"))


// console.log(parseInt("110", 16))
// console.log(Number("10"))


// 17.****

// console.log(0.1 + 0.2 !== 0.3)
// console.log(0.1 + 0.2)


// 19.****
// let sum = Number((0.1 + 0.2).toFixed(4));

// console.log(sum !== 0.3)


// 19.**** alternative
// let Decimal = require('decimal.js')

// let num1 = Decimal(0.1);
// let num2 = Decimal(0.2);

// let sum = num1.plus(num2)

// console.log(Number(sum) === 0.3)


// 20.***

// let string = "manas";
// let arr = ['m', 'a', 'n', 'a', 's']

// let test = arr.slice(-4, -2)
// console.log(test)
// console.log(arr, string)


// let test = arr.splice(-4, 0, 'z', 'y')
// console.log(test);
// console.log(arr);

/*

1st difference - slice apka string and array dono ke sath kam karta hai lekin splice apka sirf or sirf array ke sath kam karta hai

2nd difference - slice apka originial array, string me koi change nahi karta hai lekin splice apka original array me change kar deta hai

3rd difference - slice apka sirf tukda kat ke de rha hota hai lekin splice apka tukda bhi katt ke de skta hai sath hi add bhi kar skta h elements ko and sath hi delete bhi kar skta hai elements ko


*/


// 21.****

// let sentence = "Mai hun manas kumar lal"

// let finalResult = sentence.split(' ').map(word => {
//     let reverseWord = word.split('').reverse().join('')
//     return reverseWord
// }).join(' ')

// console.log(finalResult)


// 22.****

// let arr = [1, '55', 3, 'manas', 7, 1];
// let sum = 0;

// arr.forEach(item => {
//     if(typeof item === 'number'){
//         sum += item;
//     }
// })

// console.log(sum)

//23.****

// let num = 123.234234

// console.log(Number.isInteger(num));
// console.log(num % 1 === 0)


//24. *****

// function reverseNumber(num) {
//     return Number(num.toString().split('').reverse().join(''))
// }


// let reverse = reverseNumber(24523454)
// console.log(reverse)


// 25.****

// let string = "Manas Kumar Lal"


// function sortInAlphabeticalOrder(string) {
//     // return string.split('').sort().join('').trim()

//     return (string.split(' ').sort().join(' '))
// }


// let result = sortInAlphabeticalOrder(string)
// console.log(result);


// 26.***

// let sentence = "hey i Am manas kumar lal";

// const capitalizeFirstLetter = (string) => {
//     let resultArr = string.split(' ').map(word =>{
//         return word.charAt(0).toUpperCase() + word.slice(1)
//     })
//     return resultArr.join(' ')
// }


// let result = capitalizeFirstLetter(sentence)
// console.log(result)


//  27.*****
// function getArrayElement(arr, n){
//     if(!n){
//         return arr[0]
//     }else if(n > arr.length){
//         console.log("itna elements to array me present hi nahi hai")
//     }else{
//         return arr.slice(0, n)
//     }
// }


// let result = getArrayElement([2,5,9,1], 5)
// console.log(result)


// 28.****
// let str = "Manas";

// function getOccurence(string){

//     let obj = {};

//     string.split('').forEach(letter => {
//         if(obj.hasOwnProperty(letter)){
//            obj[letter] ++
//         }else{
//             obj[letter] = 1;
//         }
//     });

//     // for (let key in obj){
//     //     console.log(`${key} apka ${obj[key]} bar aaya hai`)
//     // }

//     let arr = Object.entries(obj)
//     arr.forEach(entryArr =>{
//         console.log(`${entryArr[0]} apka ${entryArr[1]} baar aaya hai`)
//     })
// }

// getOccurence(str)


// // 29.****
// let str = [1, 5, 3, 4, 2, 3, 5, 2, 3, 2];

// function getOccurence(arr) {

//     let freqObj = {};

//     arr.forEach(letter => {
//         if (freqObj.hasOwnProperty(letter)) {
//             freqObj[letter]++
//         } else {
//             freqObj[letter] = 1;
//         }
//     });

//     let maxFreq = Math.max(...Object.values(freqObj))

//     let keyValueArr = Object.entries(freqObj)
//     let filteredArray = keyValueArr.filter(entryArr => {
//         return entryArr[1] === maxFreq
//     })

//     console.log(filteredArray)
// }

// getOccurence(str)


// 30.****

let arr = [1, 2, 3, 4, 5];

for (let ind in arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    // let temp = arr[ind];
    // arr[ind] = arr[randomIndex];
    // arr[randomIndex] = temp;

    [arr[randomIndex], arr[ind]] = [arr[ind], arr[randomIndex]]
}

console.log(arr);