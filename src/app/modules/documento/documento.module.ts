import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentoRoutingModule } from './documento-routing.modules';
import { DocumentoComponent } from './documento.component';


@NgModule({
  declarations: [DocumentoComponent],
  imports: [
    CommonModule,
    DocumentoRoutingModule
  ]
})
export class DocumentoModule { }