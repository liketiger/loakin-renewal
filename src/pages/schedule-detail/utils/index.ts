import dayjs from 'dayjs';
import { RaidView } from '../types/view';

export const getRaidModalFormValues = (isCreate: boolean, item?: RaidView) => {
  return isCreate
    ? {
        created_at: '',
        name: '',
        level: '',
        date: '',
        time: ''
      }
    : {
        id: item?.id,
        created_at: item?.created_at,
        name: item?.name ?? '',
        level: item?.level ?? '',
        date: item?.date,
        time: dayjs(item?.time, 'HH:mm:ss')
      };
};
