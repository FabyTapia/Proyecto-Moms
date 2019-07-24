import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class MomsService {

  constructor(
    public afAutentificacion:AngularFireAuth 
  ) { }
}
