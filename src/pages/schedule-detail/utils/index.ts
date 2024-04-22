import dayjs from 'dayjs';
import { MemberView } from '../../member/types/view';
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

export const getUserOptionList = (list: MemberView[]) =>
  Array.from(new Set(list.map((el) => el.userName))).map((item) => ({
    label: item,
    value: item
  }));

export const getCharacterOptionList = (list: MemberView[], userName: string) =>
  list
    .filter((item) => item.userName === userName)
    .map((el) => ({ label: el.CharacterName, value: el.CharacterName }));
