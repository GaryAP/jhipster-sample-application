import { IFacility } from 'app/shared/model/facility.model';

export interface IResident {
  id?: number;
  firstName?: string;
  lastName?: string;
  idNumber?: number;
  facility?: IFacility;
}

export class Resident implements IResident {
  constructor(
    public id?: number,
    public firstName?: string,
    public lastName?: string,
    public idNumber?: number,
    public facility?: IFacility
  ) {}
}
