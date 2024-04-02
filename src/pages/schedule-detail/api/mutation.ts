import { useMutation, useQueryClient } from '@tanstack/react-query';
import { scheduleDetailApi } from '.';
import { RaidParams } from '../types/parameter';
import { useDialog } from '../../../components/dialog/useDialog';

export const scheduleDetailMutation = {
  useRaidCreate: (date: string) => {
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
      mutationFn: () => scheduleDetailApi.createRaids(date),
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
    const { alert } = useDialog();
    const { mutate } = useMutation({
      mutationFn: (id: number) => scheduleDetailApi.deleteRaid(id),
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ['schedule', 'raids', date]
        });
      },
      onError: async () => {
        alert({
          description: '삭제에 실패했습니다.',
          title: '알림'
        });
      }
    });
    return {
      mutate
    };
  },

  useAllRaidDelete: (date: string) => {
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
      mutationFn: () => scheduleDetailApi.deleteAllRaids(date),
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
