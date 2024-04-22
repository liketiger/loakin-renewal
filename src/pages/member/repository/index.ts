import { memberMutation } from '../api/mutation';
import { memberQuery } from '../api/query';
import { MemberParams } from '../types/parameter';

export const memberRepository = {
  useCharacterList: (characterName: string) => {
    const { data } = memberQuery.useCharacterListGet(characterName);
    return {
      data
    };
  },

  useMemberListGet: () => {
    const { data } = memberQuery.useMemberListGet();
    return {
      data
    };
  },

  useMemberListUpdate: () => {
    const { mutate } = memberMutation.useMemberUpdate();
    return {
      run: (characterList: MemberParams[]) => mutate(characterList)
    };
  },

  useMemberListDelete: () => {
    const { mutate } = memberMutation.useMemberDelete();
    return {
      run: (characterName: string) => mutate(characterName)
    };
  }
};
