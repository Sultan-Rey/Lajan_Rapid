import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, NavigationExtras} from '@angular/router';
import { AngularFireAuth} from '@angular/fire/auth';
import { AlertController, LoadingController } from '@ionic/angular';
import { Storage} from '@ionic/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/models/user';
import { isNullOrUndefined } from 'util';
import { FormBuilder, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

 
  dataUser = {
    mail: null,
    password: null
  };
 
  fakeToken = {
    pseudo: 'admin',
    pass: 'richy'
  }

  constructor(private route: ActivatedRoute, private router: Router, private storage: Storage,
              private afAuth: AngularFireAuth, private loadingcontroller: LoadingController,private afstore: AngularFirestore,
              private alertcontroller: AlertController, private formBuilder: FormBuilder,private fireauth: AngularFireAuth) { }

  ngOnInit() {
    this.afAuth.signOut();
  }

 async onSubmitForm(form: NgForm){
      
      if(this.dataUser.mail!=null && this.dataUser.mail!=''
          && this.dataUser.password!=null && this.dataUser.password!=''){
            if(this.dataUser.mail == this.fakeToken.pseudo && this.dataUser.password == this.fakeToken.pass){
              this.router.navigateByUrl("/home");
            }else{
              const alert = await this.alertcontroller.create({
                cssClass: 'my-custom-class',
                header: 'Login error',
                subHeader: 'Invalid credentials',
                message: 'Your username or password is invalid, 5 attempts left...',
                buttons: ['Ok']
              });
              await alert.present();
            }
            
          }else{
          var usr = document.getElementById('un');
          var pwd = document.getElementById('pd');
          usr.blur;
          usr.style.color='red';
          pwd.blur;
          pwd.style.color = 'red';
          }
  }



}
