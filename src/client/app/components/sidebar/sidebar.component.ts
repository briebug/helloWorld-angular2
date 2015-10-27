import {Component, NgFor, CORE_DIRECTIVES} from 'angular2/angular2';
import {ROUTER_DIRECTIVES} from 'angular2/router';

export interface IRoute {
	ref: string[],
	name: string,
	iconClass: string
}

@Component({
	selector: 'sidebar',
	templateUrl: 'app/components/sidebar/sidebar.html',
	directives: [NgFor, CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})
export class SidebarComponent {
	navRoutes: IRoute[];

	constructor() {
		this.navRoutes = [
			{ name: 'Dashboard', ref: ['./Dashboard'], iconClass: 'fa-dashboard' },
			{ name: 'Admin', ref: ['./Admin'], iconClass: 'fa-lock' }
		];
	}
}