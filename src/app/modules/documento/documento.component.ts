import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalViewPdfComponent } from 'src/app/shared/components/modal-view-pdf/modal-view-pdf.component';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {DocumentosService} from './documentos.service'
import { DocumentoResponse } from 'src/app/shared/models/documento.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-documento',
  templateUrl: './documento.component.html',
  styleUrls: ['./documento.component.css'],
})
export class DocumentoComponent implements OnInit {
libros : any
  constructor(public modalService: NgbModal, private http: HttpClient, private documentoService: DocumentosService,  private router: Router) {}
   
  ngOnInit(): void {
    this.documentoService.getDocumentos('').subscribe((rest) => {
      if (rest) {
        this.libros = rest
      }
    })
  }

  showPDF(url: string): void {
    const modalPdf = this.modalService.open(ModalViewPdfComponent, {
      size: 'lg',
    });
    (modalPdf.componentInstance.title = 'Visualizar documento'),
      (modalPdf.componentInstance.btnCancelText = 'Salir');
    modalPdf.componentInstance.url = url;
    modalPdf.result.then((result) => {}).catch(() => {});
  }

  
  dowloadPdf(url: string) {
    console.log("descargandoo", url)
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/pdf');
    return this.http.get(url, { headers: headers, responseType: 'blob' });
  }
  

  
}
