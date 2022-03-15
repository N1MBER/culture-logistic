import { Time } from './date';
import { Location } from './google';

type Galery = string[];

export type WorkTime = {
  mon?: [Time, Time];
  tue?: [Time, Time];
  wed?: [Time, Time];
  thu?: [Time, Time];
  fri?: [Time, Time];
  sat?: [Time, Time];
  sun?: [Time, Time];
};

export const transformWorkTimeToRus = (work: WorkTime) => {
  return {
    'Пн.': work.mon,
    'Вт.': work.tue,
    'Ср.': work.wed,
    'Чт.': work.thu,
    'Пт.': work.fri,
    'Сб.': work.sat,
    'Вс.': work.sun,
  };
};

export type Place = {
  name: string;
  description?: string;
  address?: string;
  image?: string;
  workTime?: WorkTime;
  coordinate: Location;
  galery?: Galery;
  events?: PlaceEvent[];
};

export type PlaceEvent = {
  name: string;
  startTime?: Date;
  endTime?: Date;
  galery?: Galery;
  description?: string;
  image?: string;
  price?: number;
};
