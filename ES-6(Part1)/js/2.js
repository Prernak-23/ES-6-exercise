

//Question 1: Select all the list items on the page and convert to array.

let selectItems=(element)=>Array.from(document.querySelectorAll(element));

//Question 2: Filter for only the elements that contain the word 'flexbox'

let filtered_items=selectItems('li').filter(element=> element.innerText==="Flexbox Video");

//Question 3: map down to a list of time strings

let list_time=selectItems('li').map(element=>element.getAttribute('data-time'));


//Question 4: map to an array of seconds

let list_seconds=list_time.map(element=> element.substr(element.indexOf(':')+1,element.length));

//Question 5: reduce to get total using .filter and .map

let reduce_total_seconds=list_time.reduce((accumulator,element)=>{ 
let hour=+parseInt(element.split(":")[0])*60;
let seconds=parseInt(element.split(":")[1]);
return accumulator+hour+seconds;

},0);

//Testing all Functions
console.log(selectItems("li"));
console.log(filtered_items);
console.log("list time "+list_time);
console.log("list seconds "+list_seconds);
console.log("total seconds "+reduce_total_seconds);

