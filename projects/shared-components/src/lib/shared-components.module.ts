import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedComponentsComponent } from './components/shared-components/shared-components.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SharedComponentsComponent],
  entryComponents: [SharedComponentsComponent],
  exports: [SharedComponentsComponent],
})
export class SharedComponentsModule {}
