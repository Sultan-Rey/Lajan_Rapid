import { Injectable } from '@angular/core';
import { Product} from '../../models/product';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentData, DocumentReference} from '@angular/fire/firestore';
import { Observable} from 'rxjs';
import { Order } from 'src/models/order';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'src/models/user';
import { HomeDesign } from 'src/models/homeDesign';
import { Categories } from 'src/models/category';
import { Brands } from 'src/models/brands';
import { Slides } from 'src/models/slides';
import { AngularFireStorage } from '@angular/fire/storage';
import { Storage} from '@ionic/storage';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class FirestoreDataService {

  productCollection: AngularFirestoreCollection<Product>;
  categoriesCollection: AngularFirestoreCollection<Categories>;
  brandsCollection: AngularFirestoreCollection<Brands>;
  ordersCollection: AngularFirestoreCollection<Order>;
  usersCollection: AngularFirestoreCollection<User>;
  homeCollection: AngularFirestoreCollection<HomeDesign>;
  slidesCollection: AngularFirestoreCollection<Slides>;
  message: Observable<DocumentData[]>;
  product: Observable<Product[]>;
  category: Observable<Categories[]>
  brand: Observable<Brands[]>
  user: Observable<User[]>;
  slides: Observable<Slides[]>;
  homeDesign: Observable<HomeDesign[]>;
  orderData: Observable<Order[]>;
  items: Product[];
  app_user: User[];
  items_ordered: Order[];
  userId: string='';
  connected: boolean;
  constructor( private afs: AngularFirestore, private afAuth: AngularFireAuth, private storage: Storage, private angularefireSG: AngularFireStorage) { }


  uploadImage(data:string, path:string){
    const imageRef = this.angularefireSG.ref(path);
    return imageRef.putString(data, 'data_url');
  }
  DeleteImage(path:string){
    const imageRef = this.angularefireSG.ref(path);
    return imageRef.delete();
    
  }

  getMainSlides(){
    this.slidesCollection = this.afs.collection('slides')
    this.slides = this.slidesCollection.valueChanges();
    return this.slides; 
  }

  getCategories(){
    this.categoriesCollection = this.afs.collection('categories', q=>q.orderBy("category","asc"));
    this.category = this.categoriesCollection.valueChanges();
    return this.category; 
  }


  getBrands(){
    this.brandsCollection = this.afs.collection('brands', q=>q.orderBy("date_added","asc").limit(4));
    this.brand = this.brandsCollection.valueChanges();
    return this.brand; 
  }


  getProducts(){
    this.productCollection = this.afs.collection('products',q=>q.orderBy('creation_date','desc'));
    this.product = this.productCollection.valueChanges();
    return this.product;
  }
  getHomeDesign(){
    this.homeCollection = this.afs.collection('homepane', q=>q.orderBy("range","asc"));
    this.homeDesign = this.homeCollection.valueChanges();
    return this.homeDesign;
  }


  getOrders(){
       
    this.ordersCollection = this.afs.collection('orders',q=>q.orderBy('date_order','asc'));
    this.orderData = this.ordersCollection.valueChanges();
 return this.orderData;
}

  getUsers(){
    this.usersCollection = this.afs.collection('user');
    this.user = this.usersCollection.valueChanges();
   return this.user;
  }

setCategory(category: Categories){
  return  this.afs.collection('categories').add(category);
}
setBrand(brand: Brands){
  return  this.afs.collection('brands').add(brand);
}
setProduct(product: Product){
  return  this.afs.collection('products').add(product);
}
setHomePane(panel: HomeDesign){
  return this.afs.collection('homepane').add(panel);
}
setSlides(slide: Slides){
  return this.afs.collection('slides').add(slide);
}
editSlides(slide:Slides){
  return this.afs.collection('slides', q=>q.where("id","==",slide.id)).doc().update(slide);
}

removeSlides(slideId:string){
  return this.afs.collection('slides',q=>q.where("id","==",slideId)).doc().delete();
}

removeProduct(item:any){
  this.productCollection = this.afs.collection('product', q=>q.where("description","==",item.description));
  this.productCollection.get().toPromise().then(querySnapshot=>{
    querySnapshot.forEach(dd=>{
      dd.ref.delete();
    })
  })
}

editProduct(item:any){
 
  this.productCollection = this.afs.collection('product', q=>q.where("description","==",item.description));
 return this.productCollection.get().toPromise().then(querySnapshot=>{
    querySnapshot.forEach(dd=>{
      dd.ref.update(item)
    })
  })
 
}



}
