export class User {
  constructor(
    public lastName: string,
    public firstName: string,
    public email: string,
    public drinkPreference: string,
    public hobbies?: string[]
  ){}

}
