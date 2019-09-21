import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedComponentsModule, SharedComponentsComponent } from 'projects/shared-components';

import { DashboardElementComponent } from './dashboard-element/dashboard-element.component';
import { GoodbyeElementComponent } from './goodbye-element/goodbye-element.component';
import { HelloElementComponent } from './hello-element/hello-element.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    SharedComponentsModule,
  ],
  declarations: [
    HelloElementComponent,
    GoodbyeElementComponent,
    DashboardElementComponent,
  ],
  entryComponents: [
    HelloElementComponent,
    GoodbyeElementComponent,
    DashboardElementComponent,
  ],
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const injector = { injector: this.injector };
    customElements.define('app-hello', createCustomElement(HelloElementComponent, injector));
    customElements.define('app-goodbye', createCustomElement(GoodbyeElementComponent, injector));
    customElements.define('app-dashboard', createCustomElement(DashboardElementComponent, injector));
    customElements.define('lib-shared', createCustomElement(SharedComponentsComponent, injector));
   }
}
