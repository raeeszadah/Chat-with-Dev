
// 1.******
// function getLastElement(localArr) {
//     return localArr[localArr.length - 1]
// }

// let arr = [2,1,5,3,9,10, 11];

// let lastElement = getLastElement(arr)
// console.log(lastElement)



// 2.*****

// let arr1 = [1,2,3];
// let arr2 = [5,8,10];
// let arr3 = ['a','b']

// // let combinationArr = arr1.concat(arr2, arr3)

// let combinationArr = [...arr1, ...arr2, ...arr3]
// console.log(combinationArr)

// 3.****

// let randomNumber = Math.floor(Math.random()*19);
// console.log(randomNumber);

// 4.****
// let arr = [1,5,3, 'm','a',10];

// let resultArr = arr.filter(element=>{
//     // if(typeof element === 'string'){
//     //     return true;
//     // }else{
//     //     return false;
//     // }

//     return typeof element === 'string';
// })

// console.log(resultArr);


// //5.****

// let arr = [3,65,2,8,19];

// console.log(Math.max(...arr))


// 6.****
// let obj = {
//     name: 'MKL',
//     age: 21,
//     city: 'bhagalpur',
// }

// let getObjectLength = (object) => {
//     return Object.keys(object).length
// }

// let length = getObjectLength(obj)
// console.log(length)

// 7.****
// let arr = [
//     {
//         name: 'manas',
//         gender: 'male',
//     },
//     {
//         name: 'muskan',
//         gender: 'female',
//     },
//     {
//         name: 'harshit',
//         gender: 'male'
//     }
// ]

// let resultArr = arr.filter(obj=>{
//     return obj.gender === 'male'
// })

// console.log(resultArr)


// // 8.****
// let arr = ['alu', 'gobi', 'halwa', 'mkl'];

// let resultArr = arr.map(elem => {
//     return (elem.toUpperCase())
// })

// console.log(resultArr)


// // 9.****
// let obj = {
//     name:'alsdjf'
// }

// let isEmptyObject = Object.keys(obj).length < 1;

// if(isEmptyObject){
//     console.log("object is empty")
// }else{
//     console.log("object is not empty")
// }


// // 10.****
// let arr = [1,5,2,3];

// let finalArr = arr.map(num=>{
//     return num*2
// })

// console.log(finalArr)

// // 11.***
// let arr = [1, 'mkl', '2', 5];

// let string = arr.join()
// console.log(string);


// 12.****
// let arr = [1,2,3,4, ['a',[2,5],'b','c'], 5, 6];

// console.log(arr.flat(1))


// 13.*****
// let arr = [1,2,3,12, 5]


// function checkNumberArray(localArr){
//     // let isNumbers = true;
//     // localArr.forEach(element => {
//     //     if(typeof element !== 'number'){
//     //         isNumbers = false;
//     //     }
//     // });
//     // return isNumbers;


//     let isNumbers = localArr.every(elem => typeof elem === 'number')

//     return isNumbers;

// }

// let isAllNumbers = checkNumberArray(arr);
// console.log(isAllNumbers);


// 14.****
// function isPrime(num){

//     if(num === 0 || num === 1){
//         return false;
//     }

//     for(let i = 2 ; i<=Math.sqrt(num);i++){
//         if(num % i === 0) return false;
//     }

//     return true;
// }


// console.log(isPrime(1))



function removeDuplicate(arr){
    // let set = new Set(arr);
    // return [...set]

   let resultantArr = arr.filter((element, index)=>{
        return arr.indexOf(element) === index
    })

    return resultantArr;
}

let resultArr = removeDuplicate([1,2,2,5,2,3,4,1])

console.log(resultArr)