import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditPedidoPageRoutingModule } from './edit-pedido-routing.module';

import { EditPedidoPage } from './edit-pedido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditPedidoPageRoutingModule
  ],
  declarations: [EditPedidoPage]
})
export class EditPedidoPageModule {}