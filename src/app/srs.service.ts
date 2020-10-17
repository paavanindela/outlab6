import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SrsService {

  constructor(private http: HttpClient) { }

  private getUrl = 'https://cs251-outlab-6.herokuapp.com/initial_values/';
  private postUrl = 'https://cs251-outlab-6.herokuapp.com/add_new_feedback/';

  private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    console.error('An error occurred:', error.error.message);
  } else {
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  return throwError(
    'Something bad happened; please try again later.');
  }

  getdata(){
	return this.http.get(this.getUrl)
	.pipe(
	  retry(3),
	  catchError(this.handleError)
	);
  }
  postdata(){

  }
}
