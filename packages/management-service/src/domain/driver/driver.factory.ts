import { datatype } from 'faker';
import { CreateDriverDto } from './driver.dto';

export const buildDriverDto = (): CreateDriverDto => ({
  mechanicalSkill: datatype.boolean(),
  expirienceYears: datatype.number(80),
});
