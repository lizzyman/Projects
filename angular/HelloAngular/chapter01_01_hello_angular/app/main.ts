/**
 * Created by Admin on 2017-05-12.
 */
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

/* Component를 만들기 위해선 반드시 [@Component({}) (= Component Decorator) 와 Class] 를 써줘야 한다 */
@Component({
    selector: 'my-app', // index.html의 <my-app>과 연결
    template:  `<h1>Hello Angular</h1>
                <sub-component></sub-component>
                ` // my-app 이란 component의 모양을 보여주는 html
})

class AppComponent {

}

@Component({
    selector: 'sub-component',
    template: '<h3>Hello Component</h3>'

})
class AppComponent2 {

}

@NgModule({
    declarations: [ AppComponent, AppComponent2 ], // 사용한 모든 Component를 다 명시해줘야 한다
    imports: [ BrowserModule ], // 브라우저에서 앱을 로딩하기 위한 모듈
    bootstrap: [ AppComponent ] // 브라우저에서 제일 먼저 보여줄 컴포넌트 = 루트 컴포넌트
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule); // App 모듈로 어플리케이션 로딩

