import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { AuthGuard } from './auth/guards/auth.guard';
// import { PaymentPageComponent } from './components/pages/payment-page/payment-page.component';


const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'search/:searchTerm',component :HomeComponent},
  {path : 'tag/:tag',component:HomeComponent},
  {path:'food/:id',component:FoodpageComponent},
  {path:'cart-page' ,component:CartPageComponent},
  {path:'login' ,component:LoginPageComponent},
  {path:'register',component:RegisterPageComponent},   
  {path:'checkout',component:CheckoutPageComponent, canActivate:[AuthGuard]},
  // {path:'payment', component: PaymentPageComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

