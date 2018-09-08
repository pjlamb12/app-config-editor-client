import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgLoadersModule } from 'ng-loaders';

import { AppManagerRoutingModule } from './app-manager-routing.module';
import { AppListComponent } from './app-list/app-list.component';
import { LandingComponent } from './landing/landing.component';
import { AppFullDetailComponent } from './app-full-detail-card/app-full-detail-card.component';
import { AppDetailsComponent } from './app-details/app-details.component';
import { AppManagerService } from './app-manager.service';
import { AppFormComponent } from './app-form/app-form.component';

@NgModule({
	imports: [CommonModule, RouterModule, HttpClientModule, FormsModule, NgLoadersModule, AppManagerRoutingModule],
	declarations: [AppListComponent, LandingComponent, AppFullDetailComponent, AppDetailsComponent, AppFormComponent],
	providers: [AppManagerService],
})
export class AppManagerModule {}
