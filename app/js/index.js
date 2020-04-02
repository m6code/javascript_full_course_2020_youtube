/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */


logTitle('ES6 Classes');
/* coding examples */

/*
-------------------------------------------------
+ Classes are blueprints
	* Properties
	* Behaviours
-------------------------------------------------	
+ OOP?

_________________________________________________
+ We can model real world examples
	* Animal, Human, Ball, Shoe, Anything really
-------------------------------------------------
*/

class Animal{
	constructor(name, age){
		log(`${name} is an animal, ${age} years and was created`);
		this.age = age;
		this.name = name;
	}

	eat() {
		log(`${this.name} is eating`);
	}

	sleep(){
		log(`${this.name} is sleeping`);
	}
}



const sparkles = new Animal("Sparkles", 4);
sparkles.eat();
sparkles.sleep();

log("------------------------------------------------")
const masta = new Animal("Beast", 44);
masta.eat();
masta.sleep();