//enums
enum months {
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
}

enum days {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

// console.log(months);

//html elements
let pTodayDate = document.getElementById("p--today-date");

//Today's date
let today : Date = new Date();
console.log(today);

//today's month
// console.log(today.getMonth());
let todayMonth : string = months[today.getMonth()];

//day of week
// console.log(today.getDay());
let todayDay : string = days[today.getDay()];

//day of month
// console.log(today.getDate())

//year
// console.log(today.getFullYear());

//display today's date to page
pTodayDate.innerHTML = `Today is ${ todayDay}, ${ todayMonth} ${today.getDate()}, ${today.getFullYear()}`;

//Part 2

let birthdayButton = document.getElementById("button--birthday");
let userBirtday;

birthdayButton.onclick = function() {

    //assign userBirthday value to input value
    let dateInput = document.getElementById("input--date-picker");
    userBirtday = dateInput.value;
    let userBirthdayDate : Date = new Date(userBirtday + " GMT-0400");

    let birthdayMessage = document.getElementById("p--birthday-message");
    birthdayMessage.innerHTML = constructDateString(userBirthdayDate);
}

function constructDateString(userDate : Date) : string {
    if(userDate.getMonth() === today.getMonth() && userDate.getDate() === today.getDate()) {
        return `Happy Birthday`;
    } else {
        let currentYearBirthday : Date = new Date(`${today.getFullYear()}-${userDate.getMonth()}-${userDate.getDate()}`);
        
        return `Your birthday is on ${days[currentYearBirthday.getDay()]}, ${months[currentYearBirthday.getMonth()]} ${currentYearBirthday.getDate()}, ${currentYearBirthday.getFullYear()}`
    }
}
