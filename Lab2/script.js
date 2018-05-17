"use strict";
//enums
var months;
(function (months) {
    months[months["January"] = 0] = "January";
    months[months["February"] = 1] = "February";
    months[months["March"] = 2] = "March";
    months[months["April"] = 3] = "April";
    months[months["May"] = 4] = "May";
    months[months["June"] = 5] = "June";
    months[months["July"] = 6] = "July";
    months[months["August"] = 7] = "August";
    months[months["September"] = 8] = "September";
    months[months["October"] = 9] = "October";
    months[months["November"] = 10] = "November";
    months[months["December"] = 11] = "December";
})(months || (months = {}));
var days;
(function (days) {
    days[days["Sunday"] = 0] = "Sunday";
    days[days["Monday"] = 1] = "Monday";
    days[days["Tuesday"] = 2] = "Tuesday";
    days[days["Wednesday"] = 3] = "Wednesday";
    days[days["Thursday"] = 4] = "Thursday";
    days[days["Friday"] = 5] = "Friday";
    days[days["Saturday"] = 6] = "Saturday";
})(days || (days = {}));
// console.log(months);
//html elements
var pTodayDate = document.getElementById("p--today-date");
//Today's date
var today = new Date();
console.log(today);
//today's month
// console.log(today.getMonth());
var todayMonth = months[today.getMonth()];
//day of week
// console.log(today.getDay());
var todayDay = days[today.getDay()];
//day of month
// console.log(today.getDate())
//year
// console.log(today.getFullYear());
//display today's date to page
pTodayDate.innerHTML = "Today is " + todayDay + ", " + todayMonth + " " + today.getDate() + ", " + today.getFullYear();
//Part 2
var birthdayButton = document.getElementById("button--birthday");
var userBirtday;
birthdayButton.onclick = function () {
    //assign userBirthday value to input value
    var dateInput = document.getElementById("input--date-picker");
    userBirtday = dateInput.value;
    var userBirthdayDate = new Date(userBirtday + " GMT-0400");
    var birthdayMessage = document.getElementById("p--birthday-message");
    birthdayMessage.innerHTML = constructDateString(userBirthdayDate);
};
function constructDateString(userDate) {
    if (userDate.getMonth() === today.getMonth() && userDate.getDate() === today.getDate()) {
        return "Happy Birthday";
    }
    else {
        var currentYearBirthday = new Date(today.getFullYear() + "-" + userDate.getMonth() + "-" + userDate.getDate());
        return "Your birthday is on " + days[currentYearBirthday.getDay()] + ", " + months[currentYearBirthday.getMonth()] + " " + currentYearBirthday.getDate() + ", " + currentYearBirthday.getFullYear();
    }
}
