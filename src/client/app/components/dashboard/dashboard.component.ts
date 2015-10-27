import {Component} from 'angular2/angular2';
import {PeopleService, IPerson} from '../../services/people.service';

@Component({
	selector: 'dashboard',
	templateUrl: 'app/dashboard/dashboard.html'
})
export class DashboardComponent {
	constructor(peopleSvc: PeopleService) {
		this.people = peopleSvc.listAll();
	}

	people: IPerson[];
}