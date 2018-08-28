import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [CommonModule, RouterModule],
	exports: [NavigationComponent, FooterComponent],
	declarations: [NavigationComponent, FooterComponent],
})
export class LayoutModule {}
