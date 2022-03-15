export type Time = {
  hours: Hours;
  minutes: Minutes;
};

const hours = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23,
] as const;

const minutes = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
];

export type Hours = typeof hours[number];
export type Minutes = typeof minutes[number];

const getRuMonthFromDate = (date: Date, withSuffix?: boolean) => {
  switch (date.getMonth()) {
    default:
    case 0:
      return `Январ${withSuffix ? 'я' : 'ь'}`;
    case 1:
      return `Феврал${withSuffix ? 'я' : 'ь'}`;
    case 2:
      return `Март${withSuffix ? 'а' : ''}`;
    case 3:
      return `Апрел${withSuffix ? 'я' : 'ь'}`;
    case 4:
      return `Ма${withSuffix ? 'я' : 'й'}`;
    case 5:
      return `Июн${withSuffix ? 'я' : 'ь'}`;
    case 6:
      return `Июл${withSuffix ? 'я' : 'ь'}`;
    case 7:
      return `Август${withSuffix ? 'а' : ''}`;
    case 8:
      return `Сентябр${withSuffix ? 'я' : 'ь'}`;
    case 9:
      return `Октябр${withSuffix ? 'я' : 'ь'}`;
    case 10:
      return `Ноябр${withSuffix ? 'я' : 'ь'}`;
    case 11:
      return `Декабр${withSuffix ? 'я' : 'ь'}`;
  }
};

export const convertDateToString = (
  date: Date,
  withSuffix?: boolean
): string => {
  return `${date.getDate()} ${getRuMonthFromDate(
    date,
    withSuffix
  )} ${date.getFullYear()} г.`;
};

export const zeroFill = (number: number, width: number) => {
  let str = number.toString();
  for (let i = str.length; i < width; i++) str = `0${str}`;
  return str;
};

export const convertTime = (hours: Hours, minutes: Minutes) => {
  return `${zeroFill(hours, 2)}:${zeroFill(minutes, 2)}`;
};
