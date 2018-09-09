import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgLoadersModule, NgLoadersTypes } from 'ng-loaders';
import { AlertModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { ToastManagerModule } from './toast-manager/toast-manager.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		LayoutModule,
		ToastManagerModule,
		NgLoadersModule.forRoot({ color: '#007bff', type: NgLoadersTypes.GROWING_BARS }),
		AlertModule.forRoot(),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
