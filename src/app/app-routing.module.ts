import { ErrorComponent } from './views/error/error.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "users",
    loadChildren: () => import('./modules/users/users.module').then(res => res.UsersModule)
  },
  {
    path: "repositories",
    loadChildren: () => import('./modules/repositories/repositories.module').then(res => res.RepositoriesModule)
  },
  {
    path: "error",
    component: ErrorComponent
  },
  {
    path: "**",
    redirectTo: "error"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
