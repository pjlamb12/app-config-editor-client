import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgLoadersModule, NgLoadersTypes } from 'ng-loaders';
import { AlertModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { ToastManagerModule } from './toast-manager/toast-manager.module';
import { HttpErrorInterceptorService } from './http-error-interceptor.service';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		LayoutModule,
		ToastManagerModule,
		NgLoadersModule.forRoot({ color: '#007bff', type: NgLoadersTypes.GROWING_BARS }),
		AlertModule.forRoot(),
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: HttpErrorInterceptorService,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
