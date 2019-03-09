import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../example.service';

@Component({
  selector: 'app-hello-world',
  template: `
    <p>
      hello-world works!
    </p>
    <h1>{{name}}</h1>
    <input #inputName [value]= "name" (keyup.enter)="changeName($event)"/>
    <button (click)="changeName(inputName)">Save</button>
  `,
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {
  name = 'Angular';
  constructor(private exampleService: ExampleService) { }

  ngOnInit() {
    this.name = this.exampleService.name;
  }
}
