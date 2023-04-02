import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFormpageComponent } from './Pages/add-formpage/add-formpage.component';
import { EditFormPageComponent } from './Pages/edit-form-page/edit-form-page.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'add-form',component:AddFormpageComponent},
  {path:'edit-form',component:EditFormPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
