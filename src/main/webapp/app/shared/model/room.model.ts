import { IFacility } from 'app/shared/model/facility.model';

export interface IRoom {
  id?: number;
  roomNumber?: number;
  facility?: IFacility;
}

export class Room implements IRoom {
  constructor(public id?: number, public roomNumber?: number, public facility?: IFacility) {}
}
