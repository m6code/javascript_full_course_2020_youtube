/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('If Statement')
/* coding examples */

var bool = false;
if (bool){
	log("bool var was true");
} else if(!bool) {
	log("bool var was false");
} else{
	log("Not found");
}