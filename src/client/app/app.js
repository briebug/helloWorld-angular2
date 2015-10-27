var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var hello_world_component_1 = require('./hello-world/hello-world.component');
angular2_1.bootstrap(hello_world_component_1.HelloWorldApp, [router_1.ROUTER_BINDINGS, angular2_1.bind(router_1.APP_BASE_HREF).toValue('/')]);
//# sourceMappingURL=app.js.map