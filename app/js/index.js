/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */

import {coroutine as co} from 'bluebird';


logTitle('Generators');
/* coding examples */

// const getRandUsers = n => {
// 	const fetchRandUsers = fetch(`https://randomuser.me/api/?results=${n}`);
// 	fetchRandUsers.then(data => {
// 		data.json().then(randUsers => {
// 			log(JSON.stringify(randUsers.results.length));
// 			randUsers.results.forEach(user => {
// 				const {gender, name :{title: ti, first :  fname, last: lName} ,email} = user;
// 				log(`${gender} - ${ti}, ${fname} ${lName} - ${email}`)
// 			})
// 		})
// 	});
// }

// getRandUsers(50);

const getRandUsers = co(function* (n){
	const fetchRandUsers = yield fetch(`https://randomuser.me/api/?results=${n}`);
	const data = yield fetchRandUsers.json();
	return data;
});

getRandUsers(50).then(randUsers => {
	log(JSON.stringify(randUsers.results.length));
	randUsers.results.forEach(user => {
		const {gender, name :{title: ti, first :  fname, last: lName} ,email} = user;
		log(`${gender} - ${ti}, ${fname} ${lName} - ${email}`)
	})
}).catch(err => log);