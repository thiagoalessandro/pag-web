import {FormBuilder} from '@angular/forms';
import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {FormApiBase} from '../../../shared/bases/form-api-base';
import {SegUsuarioModel} from '../../../shared/models/seg-usuario.model';
import {SegUsuarioService} from '../../../shared/services/seg-usuario.service';
import {SegPerfilService} from '../../../shared/services/seg-perfil.service';
import {SegPerfilModel} from '../../../shared/models/seg-perfil.model';

@Component({
  selector: 'app-usua-cad-alt',
  templateUrl: './usua-cad-alt.component.html',
  styleUrls: ['./usua-cad-alt.component.scss']
})
export class UsuaCadAltComponent extends FormApiBase<SegUsuarioModel, SegUsuarioService> {

  private listPerfil: Array<SegPerfilModel>;

  constructor(private segPerfilService: SegPerfilService,
              formBuilder: FormBuilder,
              segUsuarioService: SegUsuarioService,
              router: Router,
              location: Location,
              route: ActivatedRoute) {
    super(formBuilder,
      segUsuarioService,
      router,
      location,
      route);
  }

  public onInit(): void {
    super.onInit();
    this.loadPerfil();
  }

  public loadPerfil() {
    this.segPerfilService.getByAtivo().subscribe(value => {
      this.listPerfil = value;
      console.log(this.listPerfil);
    });
  }

  public newFormData() {
    this.addFormGroup(this.getFormGroupPost(), new SegUsuarioModel());
  }
}
