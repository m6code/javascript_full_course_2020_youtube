/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Loops')
/* coding examples */

log("For Loops");
for (var i = 0; i < 3; i++){
	log(i);
}


var persons = [
	{name: "Alex", age: 23},
	{name: "Maria", age: 35}
];

for( var i = 0; i < persons.length; i++){
	log(persons[i].name);
	log(persons[i].age);
	log("-----------------");
}

log("While Loops");
var num = 0;
while(num < 5){
	log(num);
	num = num + 1;
}



log("Do While Loops");
var i = 0;
do{
	i ++;
	log(i);
}while(i < 5)