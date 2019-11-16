import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

import { SandwichBuilderComponent } from './components/sandwich-builder/sandwich-builder.component';

@NgModule({
  declarations: [
    SandwichBuilderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    SandwichBuilderComponent
  ]
})
export class SandwichBuilderModule { }
