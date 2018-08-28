import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppManagerRoutingModule } from './app-manager-routing.module';
import { AppListComponent } from './app-list/app-list.component';
import { LandingComponent } from './landing/landing.component';
import { AppFullDetailComponent } from './app-full-detail/app-full-detail.component';
import { AppDetailsComponent } from './app-details/app-details.component';

@NgModule({
	imports: [CommonModule, RouterModule, AppManagerRoutingModule],
	declarations: [AppListComponent, LandingComponent, AppFullDetailComponent, AppDetailsComponent],
})
export class AppManagerModule {}
