import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';

import { InicioPage } from './inicio.page';
import { NavegacionComponent } from 'src/app/componentes/navegacion/navegacion.component';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule,
    ComponentesModule
  ],
  declarations: [InicioPage]
})
export class InicioPageModule {}
