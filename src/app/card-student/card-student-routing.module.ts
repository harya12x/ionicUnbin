import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardStudentPage } from './card-student.page';

const routes: Routes = [
  {
    path: '',
    component: CardStudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardStudentPageRoutingModule {}
