import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ExtratoComponent } from './pages/extrato/extrato.component';

const routes: Routes = [
  { path: 'fintech/home', component: HomeComponent },
  { path: '', redirectTo: 'fintech/home', pathMatch: 'full' },
  { path: 'fintech/login', component: LoginComponent },
  { path: 'fintech/cadastro', component: CadastroComponent },
  { path: 'fintech/extrato', component: ExtratoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
