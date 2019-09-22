import {AbstractModel} from './abstract-model';
import {SegPerfilModel} from './seg-perfil.model';

export class SegUsuarioModel extends AbstractModel {

  public nome: string = null;
  public login: string = null;
  public email: string = null;
  public password: string = null;
  public perfil: SegPerfilModel = null;
}
