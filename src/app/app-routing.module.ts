import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PianoComponent } from './piano/piano.component';
const routes: Routes = [
{path: '', component: LoginComponent},
{path: 'home', component: PianoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
