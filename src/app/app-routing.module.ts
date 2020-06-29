import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';



const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  // { path: '', component: HomeScreenComponent },
  {path : '' , component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
