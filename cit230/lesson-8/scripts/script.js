var myDate = new Date();

var weekDayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var dayOfWeek = myDate.getDay();
var weekDay = weekDayNames[dayOfWeek];

var dayOfMonth = myDate.getDate();

var monthNames = ['January', 'Feburaury', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var monthNumber = myDate.getMonth();
var month = monthNames[monthNumber];

var year = myDate.getFullYear();

var myDateFull = weekDay + ", " + dayOfMonth + " " + month + ' ' + year;

document.getElementById("currentDate").innerHTML = myDateFull;