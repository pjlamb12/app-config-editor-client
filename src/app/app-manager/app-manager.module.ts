import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgLoadersModule } from 'ng-loaders';
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';

import { AppManagerRoutingModule } from './app-manager-routing.module';
import { AppListComponent } from './app-list/app-list.component';
import { LandingComponent } from './landing/landing.component';
import { AppFullDetailComponent } from './app-full-detail-card/app-full-detail-card.component';
import { AppDetailsComponent } from './app-details/app-details.component';
import { AppManagerService } from './app-manager.service';
import { AppFormComponent } from './app-form/app-form.component';
import { EnvironmentDetailsComponent } from './environment-details/environment-details.component';
import { EnvironmentListComponent } from './environment-list/environment-list.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		HttpClientModule,
		FormsModule,
		NgLoadersModule,
		TextareaAutosizeModule,
		AppManagerRoutingModule,
	],
	declarations: [AppListComponent, LandingComponent, AppFullDetailComponent, AppDetailsComponent, AppFormComponent, EnvironmentDetailsComponent, EnvironmentListComponent],
	providers: [AppManagerService],
})
export class AppManagerModule {}
