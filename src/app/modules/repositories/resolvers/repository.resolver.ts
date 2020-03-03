import { RepositoriesResolversModule } from './resolvers.module';
import { ApiService } from './../services/api/api.service';
import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';

import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: RepositoriesResolversModule
})
export class RepositoryResolver implements Resolve<any> {
  constructor(private apiService: ApiService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.apiService.findOne(route.params.owner, route.params.repo);
  }
}
