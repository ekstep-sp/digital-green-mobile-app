import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';
import { Network } from '@ionic-native/network/ngx';
import {Dialogs} from '@ionic-native/dialogs/ngx';
import {File} from '@ionic-native/file/ngx';
import {FileTransfer} from '@ionic-native/file-transfer/ngx';
import { SyncService } from './services/sync/sync.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    IonicStorageModule.forRoot({name: 'digitalgreendb', driverOrder:['localstorage']})],
  providers: [
    StatusBar,
    Network,
    Dialogs,
    SplashScreen,
    File,
    FileTransfer,
    SyncService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
