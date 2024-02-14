import dayjs from 'dayjs';
import { Raids } from '../types/view';

export const convertRaidsToEvents = (raids: Raids[]) =>
  raids.map((raid) => ({
    title: `${raid.name}-${raid.level} ${dayjs(raid.time, 'HH:mm:ss').format('HH:mm')}`,
    date: raid.date
  }));
