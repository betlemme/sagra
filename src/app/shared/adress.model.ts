export class Adress{
  private id: number;
  private street: string;
  private person_id: number;

  constructor(id: number, street: string, person_id: number){
    this.id = id;
    this.street = street;
    this.person_id = person_id;
  }
}
