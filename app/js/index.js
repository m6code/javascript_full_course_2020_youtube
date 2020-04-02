/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */


logTitle('Function Default Parameters');
/* coding examples */

const calPay = (yearSalary, bonus = 0) => yearSalary + bonus;

log(calPay(443500)); // no second parameter passed so default is used
log(calPay(443210, 8790)); // second parameter passed here is used

