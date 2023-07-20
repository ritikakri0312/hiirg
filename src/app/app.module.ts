import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { FormModule } from './form/form.module';

//  import {RatingModule} from 'ng-starrating';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormModule
    // RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
