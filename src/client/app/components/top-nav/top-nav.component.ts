import {Component} from 'angular2/angular2';

export interface INavLine {
	name: string,
	text: string,
	link: string
}

@Component({
	selector: 'top-nav',
	properties: ['navline'],
	templateUrl: 'app/components/top-nav/top-nav.html'
})
export class TopNavComponent {
	constructor() {
	}

	navline: INavLine;
}