import {ActivatedRoute, Router} from '@angular/router';
import {DialogConfirmService} from '../../../shared/components/dialog-confirm/dialog-confirm.service';
import {Component} from '@angular/core';
import {SegOperacaoModel} from 'src/app/shared/models/seg-operacao.model';
import {FormBuilder, Validators} from '@angular/forms';
import {ListBase} from 'src/app/shared/bases/list-base';
import {MatDialog} from '@angular/material';
import {Location} from '@angular/common';
import {SegOperacaoService} from '../../../shared/services/seg-operacao.service';
import {CommomBase} from "../../../shared/bases/commom-base";
import {FormBase} from "../../../shared/bases/form-base";

@Component({
  selector: 'app-upar-upld',
  templateUrl: './upar-upld.component.html'
})
export class UparUpldComponent extends FormBase<SegOperacaoModel, SegOperacaoService>{

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

  loadFormData(id: string) {}

  loadValidateAttributes() {  }

  newFormData() {}

}
