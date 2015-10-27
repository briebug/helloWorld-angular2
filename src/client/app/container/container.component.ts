import {Component} from 'angular2/angular2';

@Component({
	selector: 'container',
	properties: ['expanded'],
	templateUrl: 'app/container/container.html'
})
export class ContainerComponent {
	constructor() {
		this.expanded = true;
	}

	headerColor: string;
	expanded: boolean;
}