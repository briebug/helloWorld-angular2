import {Component} from 'angular2/angular2';

@Component({
	selector: 'news',
	properties: ['news'],
	templateUrl: 'app/components/news/news.html'
})
export class NewsComponent {
	constructor() {

	}

	news: any[]; // TODO: Change type to interface when we have one
}