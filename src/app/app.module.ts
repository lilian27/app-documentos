import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ModalConfirmComponent } from './shared/components/modal-confirm/modal-confirm.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalViewPdfComponent } from './shared/components/modal-view-pdf/modal-view-pdf.component';
import { SafePipe } from './shared/pipes/safe.pipe';
import { RunDirective } from './directives/run.directive';


@NgModule({
  declarations: [
    AppComponent,
    ModalConfirmComponent,
    ModalViewPdfComponent,
    SafePipe,
    RunDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
