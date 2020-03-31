/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Arrays')
/* coding examples */

// Arrays
var names = ["Jane", "Smith", "Henry", "Marry", "Murray"];

log(names);

log(names[3]);
log(names.length);

log("")
log("Looping Through Array")
for(var n of names){
	log(n);
}

log("")
log("Looping Through Array with forEach")
names.forEach(function(n, index){
	log(index + " - " + n);
});