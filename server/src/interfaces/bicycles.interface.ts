export interface Geometry {
    coordinates:object;
    type:string;
  }
  
  export interface Properties{
    id:number;
    name:string;
    coordinates:object;
    totalDocks:number;
    docksAvailable:number;
    bikesAvailable:number;
    classicBikesAvailable:number;
    smartBikesAvailable:number;
    electricBikesAvailable:number;
    kioskStatus:string;
    kioskPublicStatus:string;
    kioskConnectionStatus:string;
    kioskType:number;
    addressStreet:string;
    addressCity:string;
    addressState:string;
    addressZipCode:string;
    bikes:{
      [key:string]:Bikes
    };
     closeTime: string,
     eventEnd: string
     eventStart: string,
     isEventBased: boolean,
     isVirtual : boolean,
     kioskId : number,
     notes : string,
     openTime : string,
     publicText : string,
     timeZone : string,
     trikesAvailable : string,
     latitude :number,
     longitude : number
  }
  export interface Bikes {
    dockNumber:number;
    isElectric:boolean;
    isAvailable:boolean;
    battery:string;
  }
  export interface Features{   
    geometry: {
        [key: string]: Geometry
    };
    properties:{
        [key:string]:Properties
    };
    type:string;
  }