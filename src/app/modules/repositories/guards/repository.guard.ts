import { RepositoriesGuardsModule } from './guards.module';
import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";

@Injectable({
  providedIn: RepositoriesGuardsModule
})
export class RepositoryGuard implements CanActivate {

  constructor(
    private router: Router,
  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    let ownerName = route.params ? route.params.owner : ""
    let repoName = route.params ? route.params.repo : ""

    if (ownerName && repoName) {
      return true;
    }
    else {
      this.router.navigate(['/error'])
      return false;
    }
  }

}
