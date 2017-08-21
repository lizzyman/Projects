"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Admin on 2017-05-12.
 */
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
/* Component를 만들기 위해선 반드시 [@Component({}) (= Component Decorator) 와 Class] 를 써줘야 한다 */
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1>Hello Angular</h1>\n                <sub-component></sub-component>\n                " // my-app 이란 component의 모양을 보여주는 html
    })
], AppComponent);
var AppComponent2 = (function () {
    function AppComponent2() {
    }
    return AppComponent2;
}());
AppComponent2 = __decorate([
    core_1.Component({
        selector: 'sub-component',
        template: '<h3>Hello Component</h3>'
    })
], AppComponent2);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [AppComponent, AppComponent2],
        imports: [platform_browser_1.BrowserModule],
        bootstrap: [AppComponent] // 브라우저에서 제일 먼저 보여줄 컴포넌트 = 루트 컴포넌트
    })
], AppModule);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule); // App 모듈로 어플리케이션 로딩
//# sourceMappingURL=main.js.map