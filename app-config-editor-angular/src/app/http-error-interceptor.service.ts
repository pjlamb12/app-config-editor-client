import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { ToasterService } from './toast-manager/toaster.service';
import { ToastMessage } from './toast-manager/toast-message';

@Injectable({
	providedIn: 'root',
})
export class HttpErrorInterceptorService implements HttpInterceptor {
	constructor(private _injector: Injector) {}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const toaster = this._injector.get(ToasterService);
		return next.handle(request).pipe(
			// If you use this tap method, and catch the error in the second callback, the error will also continue on the the component that made the call
			tap(
				(incoming: any) => {},
				(error: HttpErrorResponse) => {
					console.error(error);
					toaster.addMessage(
						new ToastMessage({
							message: error.message || 'An API error occurred',
							level: 'danger',
							dismissible: true,
						}),
					);
					return of(error);
				},
			),
		);
	}
}
