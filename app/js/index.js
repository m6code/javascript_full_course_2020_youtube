/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Functions')
/* coding examples */

function sum(a, b){
	// start of function
	// Define logic
	log("Adding " + a +" + " + b);
	log("result = " + (a+b));
	// end of funtion
}

sum(30,10);
sum(590, 345);

function multiply(a, b){
	log(a +" * " + b);
	log("result = " + (a*b));
	
}

multiply(20,2);

function divide(a,b){
	log( a +" / " + b);
	log("result = " + (a/b));
}
divide(12,3);