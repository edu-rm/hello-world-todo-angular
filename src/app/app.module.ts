import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodosModule } from './todos/todos.module';
import { WebSiteComponent } from './web-site/web-site.component';

@NgModule({
  declarations: [
    AppComponent,
    WebSiteComponent,
  ],
  imports: [
    BrowserModule,
    TodosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
