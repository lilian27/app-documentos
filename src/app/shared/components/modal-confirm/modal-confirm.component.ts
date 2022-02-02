import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.css']
})
export class ModalConfirmComponent implements OnInit {
  @Input() title: string = 'Modal confirm' ;
  @Input() message: string = '';
  @Input() btnOkText: string = '';
  @Input() btnCancelText: string = '';


  constructor(public activeModal: NgbActiveModal) {}

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
