import { RepositoriesResolversModule } from './resolvers/resolvers.module';
import { PipesModule } from './../../pipes/pipes.module';
import { RepositoryComponent } from './components/repository/repository.component';
import { RepositoryViewComponent } from './views/repository/repository.component';
import { RepositoriesViewComponent } from './views/repositories/repositories.component';
import { RepositoriesServicesModule } from './services/services.module';
import { RepositoriesRoutingModule } from './repositories-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RepositoriesGuardsModule } from './guards/guards.module';


@NgModule({
  declarations: [
    RepositoriesViewComponent,
    RepositoryViewComponent,
    RepositoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RepositoriesRoutingModule,
    RepositoriesServicesModule,
    PipesModule,
    RepositoriesResolversModule,
    RepositoriesGuardsModule
  ],
  providers: [],
})

export class RepositoriesModule { }
