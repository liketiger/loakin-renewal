import { settingsRepository } from '../../../repository';
import { useSettingsState } from '../../../useState';

export { useQueryLogic as useRaidSettingsRowQueryLogic };

const useQueryLogic = () => {
  const keyword = useSettingsState((state) => state.keyword);  
  const { data: settingsList } = settingsRepository.useSettingsGet(keyword);
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
