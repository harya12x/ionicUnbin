import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardStudentPageRoutingModule } from './card-student-routing.module';

import { CardStudentPage } from './card-student.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardStudentPageRoutingModule
  ],
  declarations: [CardStudentPage]
})
export class CardStudentPageModule {}
