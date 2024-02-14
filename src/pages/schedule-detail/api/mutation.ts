import { useMutation, useQueryClient } from '@tanstack/react-query';
import { scheduleDetailApi } from '.';
import { RaidParams } from '../types/parameter';

export const scheduleDetailMutation = {
  useRaidCreate: (data: RaidParams, raidId: number) => {
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
      mutationFn: () => scheduleDetailApi.createRaids(data),
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ['schedule', 'raids', raidId]
        });
      },
      onError: async () => {}
    });
    return {
      mutate
    };
  }
};
