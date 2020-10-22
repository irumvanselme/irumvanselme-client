import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Message } from '../interfaces/message';

import { origin } from "../../utils/config"

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  private host = 'https://irumvanselme-apis.herokuapp.com';
  private apiURL = this.host + '/api/messages';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'app-orgin': 'from_anselme',
      'Access-Control-Allow-Origin': '*',
      'Origin': origin
    })
  };

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Message[]> {
    return this.httpClient.get<Message[]>(this.apiURL + '', this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  create(post): Observable<Message> {
    return this.httpClient.post<Message>(this.apiURL + '', JSON.stringify(post), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  find(id): Observable<Message> {
    return this.httpClient.get<Message>(this.apiURL + '' + id)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  update(id, post): Observable<Message> {
    return this.httpClient.put<Message>(this.apiURL + '' + id, JSON.stringify(post), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  delete(id): Observable<any> {
    return this.httpClient.delete<Message>(this.apiURL + '' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  errorHandler(error): Observable<any> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
