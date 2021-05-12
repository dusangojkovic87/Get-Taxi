export interface TaxiOrder{
  startDestination:string;
  endDestination:string;
  timeDate:Date;
  carClass:string;
  phoneNumber:string;
  passengersNumber?:number;
}
