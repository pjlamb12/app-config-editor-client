import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgLoadersModule, NgLoadersTypes } from 'ng-loaders';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		LayoutModule,
		NgLoadersModule.forRoot({ color: '#007bff', type: NgLoadersTypes.GROWING_BARS }),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
