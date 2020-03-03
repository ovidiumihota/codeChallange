import { RepositoriesServicesModule } from './../services.module';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from "rxjs/operators"


@Injectable({
  providedIn: RepositoriesServicesModule
})
export class ApiService {
  constructor(private httpClient: HttpClient) { }

  static basePath() {
    return "https://api.github.com"
  }

  query(): Observable<any[]> {
    let requestUrl = ApiService.basePath() + '/repositories'
    return this.httpClient.get<any[]>(requestUrl).pipe(
      map((response) => {
        return response || [];
      }),
      catchError((error) => {
        return this.handleError('query repositories', requestUrl, error)
      }))
  }

  search(params?): Observable<any> {
    params = params || {};
    let requestUrl = ApiService.basePath() + '/search' + '/repositories'
    return this.httpClient.get<any[]>(requestUrl, { params: params }).pipe(
      map((response) => {
        return response || [];
      }),
      catchError((error) => {
        return this.handleError('query repositories', requestUrl, error)
      }))
  }

  findOne(owner: string, repo: string): Observable<any> {
    let requestUrl = ApiService.basePath() + '/repos' + "/" + owner + "/" + repo
    return this.httpClient.get(requestUrl).pipe(
      map((response) => {
        return <any>response;
      }),
      catchError((error) => {
        return this.handleError(`findOne repository with owner ${owner} and repo ${repo}`, requestUrl, error)
      }))
  }

  private handleError(context: string, url: string, error) {
    return Observable.throw(`${error.status} Error at ${context} when calling ${url}.`)
  }
}
