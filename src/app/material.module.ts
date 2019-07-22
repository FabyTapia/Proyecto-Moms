import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
//aqui van los modulos que importaremos para crear lo visual con material angular


@NgModule({

    imports:[
        CommonModule,
        BrowserAnimationsModule,
        MatCardModule

    ],
    exports:[
        BrowserAnimationsModule,
        MatCardModule

    ],
    declarations: [
        MatCardModule
    ]
})



export class MaterialModule { }