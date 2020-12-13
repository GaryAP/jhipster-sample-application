import { IRoom } from 'app/shared/model/room.model';
import { IResident } from 'app/shared/model/resident.model';

export interface IFacility {
  id?: number;
  facilirtyName?: string;
  rooms?: IRoom[];
  residents?: IResident[];
}

export class Facility implements IFacility {
  constructor(public id?: number, public facilirtyName?: string, public rooms?: IRoom[], public residents?: IResident[]) {}
}
