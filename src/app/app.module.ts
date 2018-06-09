import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { HelloElementComponent } from './hello-element/hello-element.component';
import { GoodbyeElementComponent } from './goodbye-element/goodbye-element.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardElementComponent } from './dashboard-element/dashboard-element.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [
    HelloElementComponent,
    GoodbyeElementComponent,
    DashboardElementComponent
  ],
  entryComponents: [
    HelloElementComponent,
    GoodbyeElementComponent,
    DashboardElementComponent
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
   }
}
