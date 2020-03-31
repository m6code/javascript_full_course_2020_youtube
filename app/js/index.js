/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Title')
/* coding examples */

// Variables
var name = "Jone Jon";
var age = 35;
var hasLicense = true;
var empty = undefined;

log(name + " type= " + typeof name);
log(age + " type= " + typeof age);
log(hasLicense + " type= " +typeof hasLicense);
log(empty + " type= " + typeof empty);
