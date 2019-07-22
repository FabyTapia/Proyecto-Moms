import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//aqui van los modulos que importaremos para crear lo visual con material angular
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  
    imports:[
        CommonModule,
        MatButtonModule

    ],
    exports:[
        MatButtonModule,

    ],
    declarations: []
})



export class MaterialModule { }