import { Component, OnInit,Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal-view-pdf',
  templateUrl: './modal-view-pdf.component.html',
  styleUrls: ['./modal-view-pdf.component.css'],

})
export class ModalViewPdfComponent implements OnInit {
  @Input() title: string = 'Modal view PDF' ;
  @Input() btnOkText: string = '';
  @Input() btnCancelText: string = '';

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }
  public cancelar() {
    this.activeModal.close(false);
  }
  public aceptar() {
    this.activeModal.close(true);
  }
  public cerrar() {
    this.activeModal.dismiss();
  }

}
