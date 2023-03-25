import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NewuserComponent } from './newuser/newuser.component';
import { ResetComponent } from './reset/reset.component';

const routes: Routes = [

  {path: 'Navigation', component:NavigationComponent},
  
  {path: 'Reset', component:ResetComponent},
  {path: 'Home', component:HomeComponent},
  {path: 'NewUser', component:NewuserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
