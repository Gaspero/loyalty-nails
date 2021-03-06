import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

// @NgModule({
//   imports: [
//     IonicModule,
//     CommonModule,
//     FormsModule,
//     RouterModule.forChild([{ path: '', component: Tab2Page }])
//   ],
//   declarations: [Tab2Page]
// })
// export class Tab2PageModule {}

// all your imports
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    QRCodeModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  declarations: [
    Tab2Page
  ],
  providers: [],
  bootstrap: [Tab2Page]
})
export class Tab2PageModule {}
