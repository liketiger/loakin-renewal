import { useMutation, useQueryClient } from '@tanstack/react-query';
import { scheduleDetailApi } from '.';
import { RaidParams } from '../types/parameter';

export const scheduleDetailMutation = {
  useRaidCreate: (date: string) => {
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
      mutationFn: (data: RaidParams) => scheduleDetailApi.createRaids(data),
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ['schedule', 'raids', date]
        });
      },
      onError: async () => {}
    });
    return {
      mutate
    };
  },
  useRaidUpdate: (date: string) => {
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
      mutationFn: (data: RaidParams) => scheduleDetailApi.updateRaids(data),
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ['schedule', 'raids', date]
        });
      },
      onError: async () => {}
    });
    return {
      mutate
    };
  },
  useRaidDelete: (date: string) => {
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
      mutationFn: (idList: number[]) => scheduleDetailApi.deleteRaids(idList),
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ['schedule', 'raids', date]
        });
      },
      onError: async () => {}
    });
    return {
      mutate
    };
  }
};
