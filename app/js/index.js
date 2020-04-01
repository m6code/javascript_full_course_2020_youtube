/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Map | Filter | Reduce')
/* coding examples */

// Map
var map = [1,2,3,4,5].map(function(n){
	return n* 5;
});

log("[].map")
log(map);

// Filter
log("[].filter");
var filterEven = [0,1,2,3,4,5,6,7,8,9,10].filter(function(n){
	return n%2 == 0;
});

log(filterEven)

//Reduce
log("[].reduce")
var reduce = [1,2,3,4,5].reduce(function(accumulator, current){
	return accumulator + current;
});

log(reduce);