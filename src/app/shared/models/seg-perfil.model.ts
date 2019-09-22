import {AbstractModel} from './abstract-model';
import {SegPermissaoModel} from './seg-permissao.model';

export class SegPerfilModel extends AbstractModel {

  public nome: string = null;
  public descricao: string = null;
  public listPermissao: Array<SegPermissaoModel> = null;
}
