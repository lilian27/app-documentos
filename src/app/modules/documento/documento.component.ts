import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documento',
  templateUrl: './documento.component.html',
  styleUrls: ['./documento.component.css'],
})
export class DocumentoComponent implements OnInit {
  constructor() {}
  libros = [
    {
      fecha: '12/12/2022',
      estado: 2,
      nombreEstado: 'activo',
      nombre: 'documento 1',
      url: 'https://drive.google.com/file/d/1t6psDhClWx4Qg8MqMU1azv5St17G4nuR/view?usp=sharing',
    },
    {
      fecha: '12/12/2022',
      estado: 1,
      nombreEstado: 'no activo',
      nombre: 'documento 2',
      url: 'https://drive.google.com/file/d/1bv0To1kXJT4y40XlFIMMGB8dFAhDePvi/view?usp=sharing',
    },
  ];
  ngOnInit(): void {
    console.log('ENTRANDO DOCUMENTOS!!!!');

    
  }
}
