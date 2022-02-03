import { Injectable } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ModalViewPdfComponent } from '../components/modal-view-pdf/modal-view-pdf.component';

@Injectable({
  providedIn: 'root',
})
export class ModalViewPdfService {
  constructor(private modalService: NgbModal) {}

  public confirm(
    title: string,
    message: string,
    btnOkText: string = 'OK',
    btnCancelText: string = 'Cancel',
    dialogSize: 'sm' | 'lg' = 'sm',
    url: string = ''
  ): Promise<boolean> {
    const modalRef = this.modalService.open(ModalViewPdfComponent, { size: dialogSize });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.btnOkText = btnOkText;
    modalRef.componentInstance.btnCancelText = btnCancelText;
    modalRef.componentInstance.url = url;
    return modalRef.result;
  }
}