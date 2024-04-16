import { useMutation, useQueryClient } from '@tanstack/react-query';
import { settingsApi } from '.';
import { RaidSettingsParams } from '../types/parameter';

export const settingsMutation = {
  useSettingsCreate: (keyword: string) => {
    const queryClient = useQueryClient();
    const { mutate, isPending } = useMutation({
      mutationFn: () => settingsApi.createSettings(),
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ['settings', keyword]
        });
      }
    });

    return {
      mutate,
      isPending
    };
  },

  useSettingsUpdate: (keyword: string) => {
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
      mutationFn: (data: RaidSettingsParams) =>
        settingsApi.updateSettings(data),
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ['settings', keyword]
        });
      }
    });

    return {
      mutate
    };
  },

  useSettingsDelete: (keyword: string) => {
    const queryClient = useQueryClient();
    const { mutate, isPending } = useMutation({
      mutationFn: (id: number) => settingsApi.deleteSettings(id),
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ['settings', keyword]
        });
      }
    });

    return {
      mutate,
      isPending
    };
  },

  useSettingsDeleteAll: (keyword: string) => {
    const queryClient = useQueryClient();
    const { mutate, isPending } = useMutation({
      mutationFn: () => settingsApi.deleteAllSettings(),
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ['settings', keyword]
        });
      }
    });

    return {
      mutate,
      isPending
    };
  }
};
