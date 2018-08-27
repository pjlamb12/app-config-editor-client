import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
	imports: [CommonModule],
	exports: [NavigationComponent, FooterComponent],
	declarations: [NavigationComponent, FooterComponent],
})
export class LayoutModule {}
