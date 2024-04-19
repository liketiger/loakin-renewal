import { memberQuery } from '../api/query';

export const memberRepository = {
  useCharacterList: (characterName: string) => {
    const { data } = memberQuery.useCharacterListGet(characterName);
    return {
      data
    };
  }
};
