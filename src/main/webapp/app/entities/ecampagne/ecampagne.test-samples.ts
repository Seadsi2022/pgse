import dayjs from 'dayjs/esm';

import { IEcampagne, NewEcampagne } from './ecampagne.model';

export const sampleWithRequiredData: IEcampagne = {
  id: 21651,
};

export const sampleWithPartialData: IEcampagne = {
  id: 89700,
  debutcampagne: dayjs('2022-09-01T03:34'),
  isopen: true,
};

export const sampleWithFullData: IEcampagne = {
  id: 921,
  objetcampagne: 'strategize programming',
  description: 'toolset',
  debutcampagne: dayjs('2022-08-31T15:54'),
  fincampagne: dayjs('2022-08-31T21:58'),
  debutreelcamp: dayjs('2022-09-01T07:55'),
  finreelcamp: dayjs('2022-09-01T11:12'),
  isopen: false,
};

export const sampleWithNewData: NewEcampagne = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
