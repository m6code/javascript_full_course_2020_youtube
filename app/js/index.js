/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */


logTitle('Array Destructuring');
/* coding examples */

const names = ['Annabel', 'Mariam', 'Joe', 'Mark', 'Matt'];

const [anna, mariam, joe] = names;
// const anna = names[0];
// const mariam = names[1];
// const joe = names[2];

log(`${anna} ${mariam} ${joe}`);

