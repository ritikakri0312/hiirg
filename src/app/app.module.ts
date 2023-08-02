import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { RattingComponent } from './ratting/ratting.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { TagsComponent } from './components/partials/tags/tags.component';
import { TitleComponent } from './components/partials/title/title.component';
// import { TagsComponent } from './tags/tags.component';


//  import {RatingModule} from 'ngx-bootstrap/rating';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    CartPageComponent,
    FoodpageComponent,
    RattingComponent,
    StarRatingComponent,
    TagsComponent,
    TitleComponent,
    // TagsComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    // RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
