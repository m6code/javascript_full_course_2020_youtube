/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Objects')
/* coding examples */

// Objects
var person = {
	name: "Jone Jon",
	age: 35,
	hasLicense: true,
	dob: "03.03.2020",
	address:{
		firstLine: "234",
		postCode: "45675",
		country: "Nigeria",
		countryCode: "NG",
		currency: "NGN"

	}
};

log(JSON.stringify(person));

log(person.name);
log(person.age);
log(person.hasLicense);
log(JSON.stringify(person.address));

log(Object.values(person));
