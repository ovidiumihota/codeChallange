import { RepositoryGuard } from './guards/repository.guard';
import { RepositoryViewComponent } from './views/repository/repository.component';
import { RepositoriesViewComponent } from './views/repositories/repositories.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositoryResolver } from './resolvers/repository.resolver';

const routes: Routes = [
  {
    path: "",
    component: RepositoriesViewComponent,
  },
  {
    path: ":owner/:repo",
    component: RepositoryViewComponent,
    resolve: {
      repository: RepositoryResolver
    },
    canActivate: [RepositoryGuard]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepositoriesRoutingModule { }
