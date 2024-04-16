import { settingsRepository } from '../../../repository';
import { useSettingsState } from '../../../useState';

export { useQueryLogic as useRaidSettingsQueryLogic };

const useQueryLogic = () => {
  const keyword = useSettingsState((state) => state.keyword);
  const { run: onSettingsCreate, isPending: isSettingsCreatePending } = settingsRepository.useSettingsCreate(keyword);
  const { run: onSettingsDeleteAll, isPending: isSettingsDeleteAllPending } =
    settingsRepository.useSettingsDeleteAll(keyword);
  return {
    onSettingsCreate,
    onSettingsDeleteAll,
    isSettingsCreatePending,
    isSettingsDeleteAllPending
  };
};
