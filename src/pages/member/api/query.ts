import { useSuspenseQuery } from '@tanstack/react-query';
import { memberApi } from '.';

export const memberQuery = {
  useCharacterListGet: (characterName: string) => {
    const { data } = useSuspenseQuery({
      queryKey: ['member', 'characterList', characterName],
      queryFn: () => memberApi.getCharacterList(characterName),
    });

    return { data };
  },

  useMemberListGet: (keyword: string) => {
    const { data } = useSuspenseQuery({
      queryKey: ['member', 'memberList', keyword],
      queryFn: () => memberApi.getMemberList(keyword),
    });

    return { data };
  }
};
