import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//aqui van los modulos que importaremos para crear lo visual con material angular

import {MatMenuModule} from '@angular/material/menu';
@NgModule({

    imports:[
        CommonModule,
        MatMenuModule

    ],
    exports:[
        MatMenuModule

    ],
    declarations: []
})



export class MaterialModule { }