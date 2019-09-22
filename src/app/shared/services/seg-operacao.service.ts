import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {SegOperacaoModel} from '../models/seg-operacao.model';
import {ServiceApiBase} from '../bases/service-api-base';
import {SegPerfilModel} from '../models/seg-perfil.model';

@Injectable({
  providedIn: 'root'
})

export class SegOperacaoService extends ServiceApiBase<SegOperacaoModel> {

  constructor(httpClient: HttpClient) {
    super();
    this.initServiceResourceServer('oper', httpClient);
  }
}
