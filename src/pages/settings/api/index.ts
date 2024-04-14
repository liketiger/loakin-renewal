import { createSupabaseSettings, deleteAllSupabaseSettings, deleteSupabseSettings, getSupabaseManagableVariable, getSupabaseSettings, updateSupabaseSettings } from "../../../services/settings";
import { RaidSettingsParams } from "../types/parameter";

const url = {
    getSettings: (keyword: string) => getSupabaseSettings(keyword),
    getManagableVariable: (params: string) => getSupabaseManagableVariable(params),
    createSettings: () => createSupabaseSettings(),
    updateSettings: (data: RaidSettingsParams) => updateSupabaseSettings(data),
    deleteSettings: (id: number) => deleteSupabseSettings(id),
    deleteAllSettings: () => deleteAllSupabaseSettings()
}

export const settingsApi = {
    getSettings: (keyword: string) => url.getSettings(keyword),
    getManagableVariable: (params: string) => url.getManagableVariable(params),
    createSettings: () => url.createSettings(),
    updateSettings: (data: RaidSettingsParams) => url.updateSettings(data),
    deleteSettings: (id: number) => url.deleteSettings(id),
    deleteAllSettings: () => url.deleteAllSettings()
}