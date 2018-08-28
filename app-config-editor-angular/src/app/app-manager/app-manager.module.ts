import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppManagerRoutingModule } from './app-manager-routing.module';
import { AppListComponent } from './app-list/app-list.component';
import { LandingComponent } from './landing/landing.component';
import { AppFullDetailComponent } from './app-full-detail-card/app-full-detail-card.component';
import { AppDetailsComponent } from './app-details/app-details.component';
import { AppManagerService } from './app-manager.service';

@NgModule({
	imports: [CommonModule, RouterModule, HttpClientModule, AppManagerRoutingModule],
	declarations: [AppListComponent, LandingComponent, AppFullDetailComponent, AppDetailsComponent],
	providers: [AppManagerService],
})
export class AppManagerModule {}
