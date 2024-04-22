import {
  deleteSupabaseMemberList,
  getSupabaseMemberList,
  updateSupabaseMemberList
} from '../../../services/member';
import { MemberParams } from '../types/parameter';
import { lostArkURL } from '../utils/constants';

const url = {
  getCharacterList: (characterName: string) =>
    `${lostArkURL}/characters/${characterName}/siblings`,
  getMemberList: getSupabaseMemberList,
  updateSupabaseMemberList: (characterList: MemberParams[]) =>
    updateSupabaseMemberList(characterList),
  deleteSupabaseMemberList: (characterName: string) =>
    deleteSupabaseMemberList(characterName)
};

export const memberApi = {
  getCharacterList: async (characterName: string) => {
    const { VITE_LOSTARK_API_KEY } = import.meta.env;
    const response = await fetch(url.getCharacterList(characterName), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${VITE_LOSTARK_API_KEY}`
      }
    });
    const data = await response.json();
    return data;
  },

  getMemberList: url.getMemberList,
  updateMemberList: (characterList: MemberParams[]) =>
    url.updateSupabaseMemberList(characterList),
  deleteMemberList: (characterName: string) =>
    url.deleteSupabaseMemberList(characterName)
};
