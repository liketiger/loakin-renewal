import { Raids } from '../types/view';

export const convertRaidsToEvents = (raids: Raids[]) =>
  raids.map((raid) => ({
    title: `${raid.name}-${raid.level} ${raid.isAfterNoon ? '오후' : '오전'} ${raid.hour}${raid.isHalfAnHour ? ':30' : ':00'}`,
    date: raid.date
  }));
