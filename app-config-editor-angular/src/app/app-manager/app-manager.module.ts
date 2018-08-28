import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppManagerRoutingModule } from './app-manager-routing.module';
import { AppListComponent } from './app-list/app-list.component';
import { LandingComponent } from './landing/landing.component';
import { AppFullDetailComponent } from './app-full-detail/app-full-detail.component';

@NgModule({
	imports: [CommonModule, AppManagerRoutingModule],
	declarations: [AppListComponent, LandingComponent, AppFullDetailComponent],
})
export class AppManagerModule {}
