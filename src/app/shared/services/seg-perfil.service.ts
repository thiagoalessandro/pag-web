import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ServiceApiBase} from '../bases/service-api-base';
import {SegPerfilModel} from '../models/seg-perfil.model';

@Injectable({
  providedIn: 'root'
})

export class SegPerfilService extends ServiceApiBase<SegPerfilModel> {

  constructor(httpClient: HttpClient) {
    super();
    this.initServiceResourceServer('perf', httpClient);
  }
}
