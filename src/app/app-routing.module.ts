import { NgModule } from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {DespreNoiComponent} from "./despre-noi/despre-noi.component";
import {InchirieriComponent} from "./inchirieri/inchirieri.component";
import {HomeComponent} from "./home/home.component";
import {NoutatiComponent} from "./noutati/noutati.component";
import {VanzariComponent} from "./vanzari/vanzari.component";
import {ContactComponent} from "./contact/contact.component";
import {NavbarComponent} from "./navbar/navbar.component";
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about-us', component:DespreNoiComponent},
  {path: 'rent', component:InchirieriComponent},
  {path: 'sale', component:VanzariComponent},
  {path: 'news', component:NoutatiComponent},
  {path: 'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
