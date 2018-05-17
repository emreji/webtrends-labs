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

console.log(months);

//html elements
let pTodayDate = document.getElementById("p--today-date");

//Today's date
let today : Date = new Date();
console.log(today);

//today's month
console.log(today.getMonth());
let todayMonth : string = months[today.getMonth()];

//day of week
console.log(today.getDay());
let todayDay : string = days[today.getDay()];

//day of month
console.log(today.getDate())

//year
console.log(today.getFullYear());

//display today's date to page
pTodayDate.innerHTML = `Today is ${ todayDay}, ${ todayMonth} ${today.getDate()}, ${today.getFullYear()}`;