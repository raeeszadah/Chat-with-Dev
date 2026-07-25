// 44.*****

// let date = new Date(0);
// console.log(date.toLocaleString());

// 45.******

// let nowDate = new Date('2025-04-23') // YYYY-MM-DDTHH:mm:ss.sssZ
// let userDate = new Date('2025-05-26');

// let diff = userDate - nowDate;
// let numOfDays = (Math.floor(diff / 1000 / 60 / 60 / 24 )) // 1s = 1000ms

// if(numOfDays > 30){
//     console.log("date khatm ho gya bhaiya... kha the aap?? 30 days ke andar form bharna tha na")
// }else{
//     console.log("congratulations apka form submit ho chuka")
// }


// 46.*****

// function takeDifference(start, end) {
//     let startDate = new Date(start);
//     let endDate = new Date(end);

//     let diff = (endDate - startDate) / 1000;

//     let years = Math.floor(diff / (60 * 60 * 24 * 365));
//     diff = diff % (60 * 60 * 24 * 365);

//     let months = Math.floor(diff / (60 * 60 * 24 * 30));
//     diff = diff % (60 * 60 * 24 * 30);

//     let days = Math.floor(diff / (60 * 60 * 24));
//     diff = diff % (60 * 60 * 24);

//     let hours = Math.floor(diff / (60 * 60));
//     diff = diff % (60 * 60);

//     let minutes = Math.floor(diff / (60));
//     let seconds = Math.floor(diff % (60));

//     return `${years} years ${months} months ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`
// }

// let startingDate = '2024-04-28T08:23:13.234Z'
// let endingDate = '2025-07-23T09:24:12.323Z'

// let difference = takeDifference(startingDate, endingDate)
// console.log(difference);


// let {DateTime} = require('luxon')

// function takeDifference(start, end) {
//     let startDate = DateTime.fromISO(start);
//     let endDate = DateTime.fromISO(end);

//     let diff = endDate.diff(startDate, ['years', 'months', 'days', 'hours', 'minutes', 'seconds', 'milliseconds'])

//     let {years, months, days, hours, minutes, seconds, milliseconds} = diff;

//     return `${years} years ${months} months ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds ${milliseconds} milliseconds`
// }

// let startingDate = '2024-04-28T08:23:13.234Z'
// let endingDate = '2025-07-23T09:24:12.323Z'

// let difference = takeDifference(startingDate, endingDate)
// console.log(difference)



// // 47.********

// let n = 25;
// let startingDate = new Date('2024-04-28T08:23:13.234Z');

// let newDateTimeStamps = startingDate.getTime() + n * 24 * 60 * 60 * 1000;
// let newDate = new Date(newDateTimeStamps);
// console.log(newDate)


// 48.****
// let dob = new Date('2004-05-25');
// let currentDate = new Date();

// let age = currentDate.getFullYear() - dob.getFullYear();
// let monthDiff = currentDate.getMonth() - dob.getMonth();
// let daysDiff = currentDate.getDay() - dob.getDate();

// if (monthDiff < 0 || (monthDiff === 0 && daysDiff < 0)) {
//     age--;
// }

// console.log(age);


// 49.******
let date = '2024-04-28T08:23:13.234Z'

function formatDate(dateStr) {
    let date = new Date(dateStr);
    return date.toLocaleDateString('en-IN', {
        weekday: 'long',
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
}

let formatedDate = formatDate(date);
console.log(formatedDate)