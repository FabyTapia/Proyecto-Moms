import { Component, OnInit } from '@angular/core';
import { MomsService } from '../../servicios/moms.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public email : string;
  public password : string;
  constructor(
    public momsService:MomsService
  ) { }

  ngOnInit() {
  }
  onSubmitAddUser(){
    this.momsService.registroUsuarios(this.email, this.password)
    .then((res) =>{
      console.log('Wuena wuena!!!');
      console.log(res);

    }).catch((error)=>{
      console.log(error);
    })
  }
}
