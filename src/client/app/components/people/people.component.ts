import {Component, NgFor} from 'angular2/angular2';
import {IPerson} from '../../services/people.service';

@Component({
	selector: 'people',
	properties: ['people'],
	templateUrl: 'app/components/people/people.html',
	directives: [NgFor]
})
export class PeopleComponent {
	constructor() {

	}

	people: IPerson[];

	clickPerson(person: IPerson) {
		window.alert(JSON.stringify(person));
	}
}