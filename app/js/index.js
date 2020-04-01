/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Callbacks')
/* coding examples */

function callbackEg(name, callback){
	log(callback(name));
}

callbackEg("John Drille", function(name){
	return "Hello " + name;
});