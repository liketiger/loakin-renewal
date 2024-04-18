import { settingsMutation } from '../api/mutation';
import { settingsQuery } from '../api/query';
import { RaidSettingsParams } from '../types/parameter';

export const settingsRepository = {
  useSettingsGet: (keyword: string) => {
    const { data } = settingsQuery.useSettingsGet(keyword);

    return {
      data
    };
  },

  useManagableVariable: () => {
    const { data } = settingsQuery.useManagableVariable();
    return {
      data
    };
  },
  useSettingsCreate: (keyword: string) => {
    const { mutate, isPending } = settingsMutation.useSettingsCreate(keyword);
    return {
      run: () => mutate(),
      isPending
    };
  },

  useSettingsUpdate: (keyword: string) => {
    const { mutate } = settingsMutation.useSettingsUpdate(keyword);
    return {
      run: (data: RaidSettingsParams) => mutate(data)
    };
  },

  useSettingsDelete: (keyword: string) => {
    const { mutate, isPending } = settingsMutation.useSettingsDelete(keyword);
    return {
      run: (id: number) => mutate(id),
      isPending
    };
  },

  useSettingsDeleteAll: (keyword: string) => {
    const { mutate, isPending } = settingsMutation.useSettingsDeleteAll(keyword);
    return {
      run: () => mutate(),
      isPending
    };
  }
};
