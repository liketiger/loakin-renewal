import { useMutation, useQueryClient } from '@tanstack/react-query';
import { memberApi } from '.';
import { MemberParams } from '../types/parameter';

export const memberMutation = {
  useMemberUpdate: () => {
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
      mutationFn: (characterList: MemberParams[]) =>
        memberApi.updateMemberList(characterList),
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ['member', 'memberList']
        });
      }
    });

    return {
      mutate
    };
  },
  useMemberDelete: () => {
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
      mutationFn: (characterName: string) =>
        memberApi.deleteMemberList(characterName),
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ['member', 'memberList']
        });
      }
    });

    return {
      mutate
    };
  }
};
