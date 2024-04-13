import { settingsRepository } from "../../../repository"

export { useQueryLogic as useRaidSettingsQueryLogic }

const useQueryLogic = () => {
    const {run: onSettingsCreate} = settingsRepository.useSettingsCreate();
    const {run: onSettingsDeleteAll} = settingsRepository.useSettingsDeleteAll();
    return {
        onSettingsCreate,
        onSettingsDeleteAll
    }
}