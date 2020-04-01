/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Switch Statement')
/* coding examples */

var person = {
	name: "Annabella",
	age: 17
}

switch(person.age){
	case 17:
		log(person.name + " is about to an adult");
		break;
	case 18: 
		log(person.name + " is an adult ");
		break;
	default:
		log(person.name + " is not an adult ");

}

var person2 = {
	name: "Abaga",
	age: 38
}

switch(true){
	case (person2.age == 17):
		log(person2.name + " is about to an adult");
		break;
	case (person2.age >= 18): 
		log(person2.name + " is an adult ");
		break;
	default:
		log(person2.name + " is not an adult ");

}

switch(new Date().getDay()){
	case 6:
		log("Saturday");
		break;
	case 5:
		log("Friday");
		break;
	case 4:
		log("Thursday");
		break;
	case 3:
		log("Wednesday");
		break;
	case 2:
		log("Tuesday");
		break;
	case 1:
		log("Monday");
		break;
	case 0:
		log("Sunday");
		break
	default:
		log("Hmmm...");
		break;
}