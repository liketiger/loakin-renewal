import { settingsRepository } from '../../../repository';
import { useSettingsState } from '../../../useState';

export { useQueryLogic as useRaidSettingsRowQueryLogic };

const useQueryLogic = () => {
  const keyword = useSettingsState((state) => state.keyword);
  const { data: settingsList } = settingsRepository.useSettingsGet(keyword);
  const { run: onSettingsCreate, isPending: isSettingsCreatePending } =
    settingsRepository.useSettingsCreate(keyword);
  const { run: onSettingsDelete, isPending: isSettingsDeletePending } =
    settingsRepository.useSettingsDelete(keyword);
  const { run: onSettingsUpdate } =
    settingsRepository.useSettingsUpdate(keyword);
  return {
    onSettingsCreate,
    onSettingsDelete,
    onSettingsUpdate,
    settingsList,
    isSettingsCreatePending,
    isSettingsDeletePending
  };
};
