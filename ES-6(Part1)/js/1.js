
document.write("<h3>Using arrow function finding array element greater than 70</h3>"+ "<br>");
var arr=[3,62,234,7,23,74,23,76,92];
document.write("Array elements:- "+arr+"<br>");
arr.sort(function(a, b){return (a – b);});					//sorting
document.write("Array elements after sorting:- "+arr+"<br>");
var greater=arr.filter(arr => arr >= 70);				//arrow function
document.write("Array elements greater than 70 :- "+greater);
