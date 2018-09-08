import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AppDetailsComponent } from './app-details/app-details.component';
import { EnvironmentDetailsComponent } from './environment-details/environment-details.component';

const routes: Routes = [
	{ path: '', component: LandingComponent },
	{ path: ':id', component: AppDetailsComponent },
	{ path: ':id/:environmentId', component: EnvironmentDetailsComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AppManagerRoutingModule {}
