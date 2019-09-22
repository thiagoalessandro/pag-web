import {ActivatedRoute, Router} from '@angular/router';
import {DialogConfirmService} from '../../../shared/components/dialog-confirm/dialog-confirm.service';
import {SegUsuarioService} from '../../../shared/services/seg-usuario.service';
import {Component} from '@angular/core';
import {SegOperacaoModel} from 'src/app/shared/models/seg-operacao.model';
import {FormBuilder, Validators} from '@angular/forms';
import {ListBase} from 'src/app/shared/bases/list-base';
import {MatDialog} from '@angular/material';
import {Location} from '@angular/common';
import {SegPerfilModel} from '../../../shared/models/seg-perfil.model';
import {SegOperacaoService} from '../../../shared/services/seg-operacao.service';
import {SegUsuarioModel} from '../../../shared/models/seg-usuario.model';

@Component({
  selector: 'app-perf-list',
  templateUrl: './usua-list.component.html',
  styleUrls: ['./usua-list.component.scss']
})
export class UsuaListComponent extends ListBase<SegUsuarioModel, SegUsuarioService> {

  constructor(segUsuarioService: SegUsuarioService,
              dialog: MatDialog,
              dialogConfirmService: DialogConfirmService,
              formBuilder: FormBuilder,
              router: Router,
              location: Location,
              route: ActivatedRoute
  ) {
    super(segUsuarioService,
      dialog,
      dialogConfirmService,
      formBuilder,
      router,
      location,
      route);
  }

  onInit(): void {
    this.initTableDataSource();
  }

  public newFormData() {
    this.addFormControl('nome', null, [Validators.required]);
  }

  public getFieldFilter(): Array<string> {
    return ['nome'];
  }

  public getColumns(): Array<string> {
    const columns:  Array<string> = [];
    columns['id'] = 'Id';
    columns['nome'] = 'Nome';
    columns['descricao'] = 'Descrição';
    columns['dh_atu'] = 'Data/Hora Atualização';
    columns['usu_atu'] = 'Usuário de Atualização';
    return columns;
  }

  public getGenerateValidatorAttributes(): boolean {
    return false;
  }

}
