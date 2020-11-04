import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MaterialModules } from './barrels/material-barrel';
import { AntModules } from './barrels/zorro-barrel';
import { SharedComponents } from './components';


// import { environment } from '@env/environment';
// const MOCKMODULE = !environment.production ? [DelonMockModule.forChild()] : [];

@NgModule({
    declarations: [
        SharedComponents
    ],
    imports: [
        MaterialModules,
        AntModules,
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports: [
        MaterialModules,
        AntModules,
        SharedComponents,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class SharedModule { }
