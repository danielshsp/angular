import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
    <h1>Hello World</h1>
    <app-hello-world></app-hello-world>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
}
