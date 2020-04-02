/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */


logTitle('Classes inheritance ');
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

	static aStaticMethod(){
		log(`I am a static method you don't need an instance the Animal class to call me`)
	}
}



const sparkles = new Animal("Sparkles", 4);
sparkles.eat();
sparkles.sleep();

log("------------------------------------------------");
const masta = new Animal("Beast", 44);
masta.eat();
masta.sleep();

log("------------------------------------------------");

class Dog  extends Animal{
	constructor(name, age, breed){
		super(name, age);
		this.breed = breed;
	}

	showBreed(){
		log(`${this.breed} is ${this.age} years and of ${this.breed} breed`);
	}
}


const mk = new Dog("MiliKa", 2 ,"BullDog");
mk.showBreed();
mk.sleep();
mk.eat();

log("_________________________________________________")
Animal.aStaticMethod();