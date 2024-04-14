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

  useManagableVariable: (params: string) => {
    const { data } = settingsQuery.useManagableVariable(params);
    return {
      data
    };
  },
  useSettingsCreate: () => {
    const { mutate } = settingsMutation.useSettingsCreate();
    return {
      run: () => mutate()
    };
  },

  useSettingsUpdate: () => {
    const { mutate } = settingsMutation.useSettingsUpdate();
    return {
      run: (data: RaidSettingsParams) => mutate(data)
    };
  },

  useSettingsDelete: () => {
    const { mutate } = settingsMutation.useSettingsDelete();
    return {
      run: (id: number) => mutate(id)
    };
  },

  useSettingsDeleteAll: () => {
    const { mutate } = settingsMutation.useSettingsDeleteAll();
    return {
      run: () => mutate()
    };
  }
};
