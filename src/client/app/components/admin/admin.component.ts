import {Component} from 'angular2/angular2';
import {ContainerComponent} from '../container/container.component';

@Component({
	selector: 'admin',
	templateUrl: 'app/components/admin/admin.html',
	directives: [ContainerComponent]
})
export class AdminComponent {
	constructor() {

	}
}