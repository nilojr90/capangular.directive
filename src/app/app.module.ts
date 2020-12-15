import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeTextDirective } from './shared/directives/change-text/change-text.directive';
import { ChildComponent } from './components/child/child.component';
import { UpperCaseDirective } from './shared/directives/upper-case/upper-case.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChangeTextDirective,
    ChildComponent,
    UpperCaseDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
