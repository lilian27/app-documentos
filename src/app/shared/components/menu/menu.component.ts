import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfirmComponent } from 'src/app/shared/components/modal-confirm/modal-confirm.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor(
    private authService: AuthService,
    public modalService: NgbModal
  ) {}

  ngOnInit(): void {}

  onLogout(): void {
    const modalConfirm = this.modalService.open(ModalConfirmComponent, {size: 'md'});
    modalConfirm.componentInstance.title = "Cerrar sesión",
    modalConfirm.componentInstance.message = "¿Esta seguro de salir del sistema?";
    modalConfirm.componentInstance.btnOkText = "Salir";
    modalConfirm.componentInstance.btnCancelText = "Cancelar";
    modalConfirm.result
      .then((result) => {
        console.log("respuesta modal", result)
        if(result)
          this.authService.logout();
      })
      .catch(() => {});
  }
}
