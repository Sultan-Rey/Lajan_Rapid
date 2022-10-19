import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanLoad {

  constructor(private router: Router, private storage: Storage, private auth: AngularFireAuth) { }
  canLoad() {
    const isAuthenticated = !!(+this.storage.get('authentificated'));
    this.auth.authState.subscribe((auth)=>{
        if(!auth){
          globalThis.window.location.href ='/';
        }else{
          return false;
        }
    })
    return isAuthenticated;
  }
    
  
}
