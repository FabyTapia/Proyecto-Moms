import { Component, OnInit } from '@angular/core';
import { MomsService } from '../../servicios/moms.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email:string;
  public password:string;  
  constructor(
    public momsService : MomsService,
    public router : Router
  ) { }

  ngOnInit() {
  }
  onSubmitLogin(){
    this.momsService.login(this.email,this.password)
    .then((res)=>{
      this.router.navigate(['/vacantes']);
      console.log(res);
    }).catch((error)=>{
      console.log(error);
      this.router.navigate(['home']);
    })
  }

}
