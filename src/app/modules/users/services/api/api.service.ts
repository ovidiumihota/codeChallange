import { UsersServicesModule } from './../services.module';
import { IPublicUser, IPublicUserPreview } from './../../interfaces/user.interfaces';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from "rxjs/operators"


@Injectable({
  providedIn: UsersServicesModule
})
export class ApiService {
  constructor(private httpClient: HttpClient) { }

  static basePath() {
    return "https://api.github.com"
  }

  query(): Observable<IPublicUserPreview[]> {
    let requestUrl = ApiService.basePath() + '/users'
    return this.httpClient.get<IPublicUserPreview[]>(requestUrl).pipe(
      map((response) => {
        return response || [];
      }),
      catchError((error) => {
        return this.handleError('query users', requestUrl, error)
      }))
  }

  findOne(id: string): Observable<IPublicUser> {
    let requestUrl = ApiService.basePath() + '/users' + "/" + id
    return this.httpClient.get(requestUrl).pipe(
      map((response) => {
        return <IPublicUser>response;
      }),
      catchError((error) => {
        return this.handleError(`findOne user with id ${id}`, requestUrl, error)
      }))
  }

  private handleError(context: string, url: string, error) {
    return Observable.throw(`${error.status} Error at ${context} when calling ${url}.`)
  }
}
