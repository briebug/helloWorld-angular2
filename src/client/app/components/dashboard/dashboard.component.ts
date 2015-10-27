import {Component} from 'angular2/angular2';
import {ContainerComponent} from '../container/container.component';
import {NewsComponent} from '../news/news.component';
import {PeopleComponent} from '../people/people.component';
import {PeopleService, IPerson} from '../../services/people.service';

@Component({
	selector: 'dashboard',
	templateUrl: 'app/components/dashboard/dashboard.html',
	directives: [ContainerComponent, NewsComponent, PeopleComponent]
})
export class DashboardComponent {
	constructor(peopleSvc: PeopleService) {
		peopleSvc.listAll()
			.then((data) => {
				this.people = data;
			});
		this.news = {
			description: "This is news!"
		};
	}

	people: IPerson[];
	news: any;
}