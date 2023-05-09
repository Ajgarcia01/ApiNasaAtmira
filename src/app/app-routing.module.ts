import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetailComponent } from './components/detail/detail.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

const routes: Routes = [ { 
  path: '',
  redirectTo:'/dashboard',
  pathMatch: 'full'
},
{ path: 'dashboard', component: DashboardComponent },
{ path: 'detail', component: DetailComponent },
{ path: 'not-found', component: NotFoundPageComponent },
{ 
  path: '**',
  redirectTo: '/not-found',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
