/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */


logTitle('Promises and Fetch Api');
/* coding examples */

const getRandUsers = n => {
	const fetchRandUsers = fetch(`https://randomuser.me/api/?results=${n}`);
	fetchRandUsers.then(data => {
		data.json().then(randUsers => {
			log(JSON.stringify(randUsers.results.length));
			randUsers.results.forEach(user => {
				const {gender, name :{title: ti, first :  fname, last: lName} ,email} = user;
				log(`${gender} - ${ti}, ${fname} ${lName} - ${email}`)
			})
		})
	});
}

getRandUsers(50);