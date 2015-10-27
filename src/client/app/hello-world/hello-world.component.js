var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var top_nav_component_1 = require('../top-nav/top-nav.component');
var sidebar_component_1 = require('../sidebar/sidebar.component');
var dashboard_component_1 = require('../dashboard/dashboard.component');
var admin_component_1 = require('../admin/admin.component');
var HelloWorldApp = (function () {
    function HelloWorldApp(router) {
        this.router = router;
        this.navline = {
            name: 'helloworld angular2',
            text: 'Created by BrieBug',
            link: 'http://briebugsoftwaresolutions.com/'
        };
        this.router.navigateByUrl('/dashboard');
    }
    HelloWorldApp = __decorate([
        angular2_1.Component({
            selector: 'hello-world',
            templateUrl: 'app/hello-world/hello-world.html',
            directives: [router_1.ROUTER_DIRECTIVES, top_nav_component_1.TopNavComponent, sidebar_component_1.SidebarComponent]
        }),
        router_1.RouteConfig([
            { path: '/dashboard', component: dashboard_component_1.DashboardComponent, as: 'Dashboard' },
            { path: '/admin', component: admin_component_1.AdminComponent, as: 'Admin' }
        ]), 
        __metadata('design:paramtypes', [router_1.Router])
    ], HelloWorldApp);
    return HelloWorldApp;
})();
exports.HelloWorldApp = HelloWorldApp;
//# sourceMappingURL=hello-world.component.js.map