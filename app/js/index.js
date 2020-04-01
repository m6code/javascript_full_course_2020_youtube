/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
// import * as Math from './Math'; // Wildcat import
import {add, divide, PI, multiply, subtract} from './Math'; // Specific import
logTitle('Named Exports and imports')
/* coding examples */

// For WildCAT import
// log(Math.add(2,2));
// log(Math.divide(20,2));
// log(Math.multiply(5,2));
// log(Math.subtract(6,2));
// log(Math.PI);

// For Specific Import
log(add(33,4));
log(divide(20,7));
log(PI);
log(multiply(3,2));
log(subtract(4,2));