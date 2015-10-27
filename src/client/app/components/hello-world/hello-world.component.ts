import {Component, bootstrap} from 'angular2/angular2';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {TopNavComponent, INavLine} from '../top-nav/top-nav.component';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {AdminComponent} from '../admin/admin.component';

@Component({
	selector: 'hello-world',
	templateUrl: 'app/components/hello-world/hello-world.html',
	directives: [ROUTER_DIRECTIVES, TopNavComponent, SidebarComponent]
})
@RouteConfig([
	{ path: '/dashboard', component: DashboardComponent, as: 'Dashboard' },
	{ path: '/admin', component: AdminComponent, as: 'Admin' }
])
export class HelloWorldApp {
	constructor(private router: Router) {
		this.navline = {
			name: 'helloworld angular2',
			text: 'Created by BrieBug',
			link: 'http://briebugsoftwaresolutions.com/'
		};

		this.router.navigateByUrl('/dashboard');
	}

	navline: INavLine; 
}