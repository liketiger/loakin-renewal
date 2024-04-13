import { settingsRepository } from '../../../repository';

export { useQueryLogic as useRaidSettingsRowQueryLogic };

const useQueryLogic = () => {
  const { data: settingsList } = settingsRepository.useSettingsGet();
  const { run: onSettingsCreate } = settingsRepository.useSettingsCreate();
  const { run: onSettingsDelete } = settingsRepository.useSettingsDelete();
  const { run: onSettingsUpdate } = settingsRepository.useSettingsUpdate();
  return {
    onSettingsCreate,
    onSettingsDelete,
    onSettingsUpdate,
    settingsList
  };
};
