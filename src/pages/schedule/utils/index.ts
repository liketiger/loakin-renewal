import dayjs from 'dayjs';
import { Raids } from '../types/view';

export const convertRaidsToEvents = (raids: Raids[]) => {
  const refinedRaids = raids.filter(
    (raid) => raid.time && raid.level && raid.name
  );  

  return refinedRaids.map((raid) => ({
    title: `${raid.name}-${raid.level} ${dayjs(raid.time).format('HH:mm')}`,
    date: raid.date,
    start: raid.time
  }));
};
