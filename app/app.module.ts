import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ExampleService } from './example.service';


@NgModule({
  declarations: [ //All what that belongs to this module (components, pipes and directivess)
    AppComponent, HelloWorldComponent
  ],
  imports: [ //other modules we want to use
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ExampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
