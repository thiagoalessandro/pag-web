import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ServiceApiBase} from '../bases/service-api-base';
import {SegUsuarioModel} from '../models/seg-usuario.model';

@Injectable({
  providedIn: 'root'
})

export class SegUsuarioService extends ServiceApiBase<SegUsuarioModel> {

  constructor(httpClient: HttpClient) {
    super();
    this.initServiceResourceServer('usua', httpClient);
  }
}
