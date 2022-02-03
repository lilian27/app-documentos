import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-modal-view-pdf',
  templateUrl: './modal-view-pdf.component.html',
  styleUrls: ['./modal-view-pdf.component.css'],
})
export class ModalViewPdfComponent implements OnInit {
  @Input() title: string = 'Modal view PDF';
  @Input() btnOkText: string = '';
  @Input() btnCancelText: string = '';
  @Input() url: string = '';

  innerHtml: any;

  constructor(
    public activeModal: NgbActiveModal,
    protected sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {}
  public cancelar() {
    this.activeModal.close(false);
  }
  public aceptar() {
    this.activeModal.close(true);
  }
  public cerrar() {
    this.activeModal.dismiss();
  }

  // revisar la implementacion de url segura
  public getUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);

    /*
    return  this.sanitizer.bypassSecurityTrustHtml(
      "<object data='" + url + "' type='application/pdf' class='embed-responsive-item'>" +
      "Object " + url + " failed" +
      "</object>");
      */

  }
}
