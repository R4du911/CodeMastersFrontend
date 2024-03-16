import { ERole } from '../../../core/authorization/model/erole';

export class RegisterRequest {
  constructor(
    public firstName: string,
    public lastName: string,
    public username: string,
    public email: string,
    public password: string,
    public role: ERole
  ){

  }
}