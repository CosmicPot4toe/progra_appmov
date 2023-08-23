import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimPageRoutingModule } from './anim-routing.module';

import { AnimPage } from './anim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimPageRoutingModule
  ],
  declarations: [AnimPage]
})
export class AnimPageModule {}
