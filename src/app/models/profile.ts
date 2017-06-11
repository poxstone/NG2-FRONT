export class Profile {
  constructor(
    public token?:string ,
    public name? :string ,
    public image?:string ,
    public email?:string  
  ) {
     this.email =  email || '';
  }
}
