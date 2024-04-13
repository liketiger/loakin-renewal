import { useSuspenseQuery } from '@tanstack/react-query';
import { settingsApi } from '.';

export const settingsQuery = {
  useSettingsGet: () => {
    const { data } = useSuspenseQuery({
      queryKey: ['settings'],
      queryFn: () => settingsApi.getSettings()
    });

    return {
      data
    };
  },

  useManagableVariable: (params: string) => {
    const { data } = useSuspenseQuery({
      queryKey: ['managableVariable', params],
      queryFn: () => settingsApi.getManagableVariable(params)
    });

    return {
      data
    };
  }
};
