import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ToasterService } from './toaster.service';
import { ToastMessageDisplayComponent } from './toast-message-display/toast-message-display.component';

@NgModule({
	imports: [CommonModule, AlertModule],
	declarations: [ToastMessageDisplayComponent],
	exports: [ToastMessageDisplayComponent],
	providers: [ToasterService],
})
export class ToastManagerModule {}
