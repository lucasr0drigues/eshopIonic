import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FramePage } from './pages/shared/frame/frame.page';
import { AuthorizedGuard } from './guards/authorized.guard';
import { ManagerGuard } from './guards/manager.guard';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [AppComponent, FramePage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
  ],
  providers: [
    AuthorizedGuard,
    ManagerGuard,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
