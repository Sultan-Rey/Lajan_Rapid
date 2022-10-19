import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { HttpClientModule} from '@angular/common/http';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';
import { PopuptransferComponent } from './popuptransfer/popuptransfer.component';
import { PopupsettingComponent } from './popupsetting/popupsetting.component';
import { PayPal} from '@ionic-native/paypal/ngx'



/* You have to replace the paramaeters of this variable by 
    data provide by your own firebase project*/
    const firebaseConfig = {
      apiKey: "AIzaSyA1Ny3hx3L-6ajRkwzjBWO382OO9gja3NM",
      authDomain: "katalog-f2607.firebaseapp.com",
      databaseURL: "https://katalog-f2607.firebaseio.com",
      projectId: "katalog-f2607",
      storageBucket: "katalog-f2607.appspot.com",
      messagingSenderId: "665739937266",
      appId: "1:665739937266:web:424eb69b7cfd99786e976b",
      measurementId: "G-ZL12M0GCQZ"
    };


@NgModule({
  declarations: [AppComponent,PopuptransferComponent,PopupsettingComponent],
  entryComponents: [],
  imports: [BrowserModule,
    FormsModule,
    NgxIonicImageViewerModule,
    HttpClientModule,
    ReactiveFormsModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    IonicStorageModule.forRoot(),
   
  ],
  providers: [
    ImagePicker,
    StatusBar,
    Camera,
    PayPal,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
