import {Component, NgClass} from 'angular2/angular2';

@Component({
	selector: 'container',
	properties: ['expanded', 'title', 'color'],
	templateUrl: 'app/components/container/container.html',
	directives: [NgClass]
})
export class ContainerComponent {
	constructor() {
		this.expanded = true;
	}

	title: string;
	color: string;
	expanded: boolean;
}