import {bootstrap, bind} from 'angular2/angular2';
import {ROUTER_BINDINGS, APP_BASE_HREF} from 'angular2/router';
import {HelloWorldApp} from './hello-world/hello-world.component';

bootstrap(HelloWorldApp, [ROUTER_BINDINGS, bind(APP_BASE_HREF).toValue('/')]);