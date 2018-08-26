function printFullAge (years){

var ages = [];
var bool = [];

for (var i = 0; i < years.length; i++) {
    ages [i] = 2018 - years[i];
}


for (i = 0; i < ages.length; i++) {
    if (ages[i] >= 18){
        document.write('<br>' + ages[i] + '<br> This person is full age! <br>');
        bool.push(true);
        
    } else {
        document.write('<br>' + ages[i] + '<br> This person is a kid. <br>');
        bool.push(false);
    }
}

return bool;
        
}

var years = [1995, 1990, 1987, 1991, 2004];
var full_1 = printFullAge(years);
var full_2 = printFullAge([2012, 2016, 1997, 1995, 2008]);

