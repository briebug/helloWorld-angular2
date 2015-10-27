import {bootstrap, bind} from 'angular2/angular2';
import {ROUTER_BINDINGS, APP_BASE_HREF} from 'angular2/router';
import {HelloWorldApp} from './components/hello-world/hello-world.component';
import {PeopleService} from './services/people.service';

bootstrap(
	HelloWorldApp, 
	[
		PeopleService,
		ROUTER_BINDINGS, 
		bind(APP_BASE_HREF).toValue('/')
	]
);