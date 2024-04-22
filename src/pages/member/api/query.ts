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

  useMemberListGet: () => {
    const { data } = useSuspenseQuery({
      queryKey: ['member', 'memberList'],
      queryFn: () => memberApi.getMemberList(),
    });

    return { data };
  }
};
