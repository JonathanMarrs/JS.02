var secondsPerMin = 60;
var minsPerHour = 60
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPerYear = 52;
var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;
document.write("There are " + secondsPerDay + " seconds in a day.")
var yearsAlive = 4.5;
var secondsAlive = yearsAlive * weeksPerYear * daysPerWeek * secondsPerDay;
document.write("<p>Asher has been alive for " + secondsAlive + " seconds.")
