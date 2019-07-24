import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class MomsService {
  currentAuthState = null;

  constructor(
    public afAutentificacion:AngularFireAuth 
  ) {
    this.afAutentificacion.authState.subscribe(auth => {
      this.currentAuthState = auth;
    });
  }

registroUsuarios(email:string, password:string){
return new Promise((resolve,reject)=>{
  this.afAutentificacion.auth.createUserWithEmailAndPassword(email,password)
  .then(userData=> resolve(userData),
  error => reject(error));
});
}
login(email:string,password:string){
  return new Promise((resolve,reject)=>{
    this.afAutentificacion.auth.signInWithEmailAndPassword(email,password)
    .then(userData=> resolve(userData),
    error => reject(error));
  });
}

getAuth(){
  return this.currentAuthState;
}

//cierre de sesion
  logOut (){
    return this.afAutentificacion.auth.signOut()
  }
}
