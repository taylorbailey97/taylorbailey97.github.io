var high = document.getElementById("high").innerHTML;
var low = document.getElementById("low").innerHTML;
var average = ((++high) + (++low) - 2) / 2;
console.log(low);
console.log(high);
document.getElementById("averageT").innerHTML = average;