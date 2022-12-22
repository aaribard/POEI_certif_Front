import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound/notfound.component';

const routes: Routes = [

  {
    path: 'accueil',
    component: AppComponent 
  },

  {
    path:'',
    redirectTo:'accueil',
    pathMatch:'full'
  },

  // Not found Page
  // WildCard Route
  {
    path: '**',
    component: NotfoundComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
