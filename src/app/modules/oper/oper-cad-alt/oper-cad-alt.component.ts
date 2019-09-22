import {FormBuilder} from '@angular/forms';
import {Component} from '@angular/core';
import {SegOperacaoModel} from 'src/app/shared/models/seg-operacao.model';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {FormApiBase} from '../../../shared/bases/form-api-base';
import {SegOperacaoService} from '../../../shared/services/seg-operacao.service';

@Component({
  selector: 'app-oper-cad-alt',
  templateUrl: './oper-cad-alt.component.html',
  styleUrls: ['./oper-cad-alt.component.scss']
})
export class OperCadAltComponent extends FormApiBase<SegOperacaoModel, SegOperacaoService> {

  constructor(formBuilder: FormBuilder,
              segOperacaoService: SegOperacaoService,
              router: Router,
              location: Location,
              route: ActivatedRoute) {
    super(formBuilder,
      segOperacaoService,
      router,
      location,
      route);
  }

  public newFormData() {
    this.addFormGroup(this.getFormGroupPost(), new SegOperacaoModel());
  }

}
