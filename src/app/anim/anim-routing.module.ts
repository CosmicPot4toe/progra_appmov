import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimPage } from './anim.page';

const routes: Routes = [
  {
    path: '',
    component: AnimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimPageRoutingModule {}
