import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GlobalHttpInterceptorService implements HttpInterceptor {

  constructor(private toastr: ToastrService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse) {
          if (error.error instanceof ErrorEvent) {
            console.error("Error Event");
          } else {
            switch (error.status) {
                case 401: //login
                  this.showOnconsole(error.error);
                  break;
                case 403: //forbidden
                  this.showOnconsole(error.error);
                  break;
                case 412: // preconditioned error
                  this.toastr.error(error.error, 'Error');
                  break;
                case 500:
                  this.showOnconsole(error.error);
                  break;
            }
          } 
        } else {
            console.error("some thing else happened");
        }
        return throwError(() => new Error(error.messsage));
      })
    )
  }

  showOnconsole(error: any): void {
    let errorMessage = `Error (${error.statusCode}): ${error.errorMessage} - `;
    errorMessage += error.detailedErrorMessage ? `Details: ${error.detailedErrorMessage}` : 'Details: no details.';
    console.error(errorMessage);
  }

}
