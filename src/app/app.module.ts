import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // because template-driven forms are in their own module, you need to add the FormsModule to the array of imports for the application module before you can use Forms
                // this gives the application access to all of the template-driven forms features, including ngModel.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
