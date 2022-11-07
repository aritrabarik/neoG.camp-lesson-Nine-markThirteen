// ex01: write a function in JS that takes a string and reverses it

function reverseStr(str) {
    return str.split("").reverse().join("");
}

// console.log(reverseStr("hello"));

// ex02: write a JS function to check for palindrome

function pallindromeStr(str) {
    var revStr = reverseStr(str);
    return str === revStr;
}

// console.log(pallindromeStr("hello"));
// console.log(pallindromeStr("mom"));
// console.log(pallindromeStr("racecar"));

// ex03: write a function that converts the date from number to string

function convertDatetoString(date) {
    var dateStr = {
        day: "",
        month: "",
        year: "",
    };

    if (date.day < 10) {
        dateStr.day = "0" + date.day;
    } else {
        dateStr.day = date.day.toString();
    }

    if (date.month < 10) {
        dateStr.month = "0" + date.month;
    } else {
        dateStr.month = date.month.toString();
    }

    dateStr.year = date.year.toString();

    return dateStr;
}

// var date = {
//   day: 5,
//   month: 9,
//   year: 2011,
// };

// console.log(convertDatetoString(date));

// ex-04: Write a JS function that takes a date and returns all variations of it

function getAllDateFormats(date) {
    var dateStr = convertDatetoString(date);

    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.date;
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;

    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}

// console.log(getAllDateFormats(date));

// ex-05: write a function that checks palindrome for all the date formats

function checkPalindromeForAllDateFormats(date) {
    var dateFormatList = getAllDateFormats(date);

    var flag = false;

    for (var i = 0; i < dateFormatList.length; i++) {
        if (pallindromeStr(dateFormatList[i])) {
            flag = true;
            break;
        }
    }

    return flag;
}

// ex-06: find the next palindrome date, also how many days are in between

function isLeapYear(year) {
    if (year % 400 === 0) return true;
    if (year % 100 === 0) return false;
    if (year % 4 === 0) return true;

    return false;
}

function getNextDate(date) {
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;

    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (month === 2) {
        if (isLeapYear(year)) {
            if (day > 29) {
                day = 1;
                month++;
            }
        } else {
            if (day > 28) {
                day = 1;
                month++;
            }
        }
    } else {
        if (day > daysInMonth[month - 1]) {
            day = 1;
            month++;
        }
    }

    if (month > 12) {
        month = 1;
        year++;
    }

    return {
        day: day,
        month: month,
        year: year,
    };
}

// ex08: get date from user and console.log it on button click

function getNextPalindromeDate(date) {
    var count = 0;
    var nextDate = getNextDate(date);

    while (1) {
        count++;
        var isPalindrome = checkPalindromeForAllDateFormats(nextDate);
        if (isPalindrome) break;

        nextDate = getNextDate(nextDate);
    }

    return [count, nextDate];
}

var dateInput = document.querySelector("#bday-input");
var showBtn = document.querySelector("#show-btn");
var outputEl = document.querySelector("#output");

function clickHandler() {
    var bdayStr = dateInput.value;

    if (bdayStr !== "") {
        var listOfDate = bdayStr.split("-");

        var date = {
            day: Number(listOfDate[2]),
            month: Number(listOfDate[1]),
            year: Number(listOfDate[0]),
        };

        var palindromeDate = checkPalindromeForAllDateFormats(date);

        if (palindromeDate)
            outputEl.innerText = `Yay! Your birthday is a palindrome! 🥳🥳`;
        else {
            var [count, nextDate] = getNextPalindromeDate(date);
            outputEl.innerText = `The next palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year}, you missed it by ${count} days 😢😢`;
        }
    }
}

showBtn.addEventListener("click", clickHandler);
