// ex01: write a function in JS that takes a string and reverses it

function reverseStr(str) {
  var revStr = str.split("").reverse().join("");
  return revStr;
}

console.log(reverseStr("hello"));

// ex02: write a JS function to check for palindrome

function pallindromeStr(str) {
  var revStr = reverseStr(str);
  return str === revStr;
}

console.log(pallindromeStr("hello"));
console.log(pallindromeStr("mom"));
console.log(pallindromeStr("racecar"));

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

var date = {
  day: 5,
  month: 9,
  year: 2011,
};

console.log(convertDatetoString(date));

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

console.log(getAllDateFormats(date));