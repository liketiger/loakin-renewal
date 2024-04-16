import { createContext } from "react"
import { voidFn } from "../../../../../utils"

interface State {
    onSettingsCreate: () => void
    onSettingsDeleteAll: () => void,
    isSettingsCreatePending: boolean,
    isSettingsDeleteAllPending: boolean
}

export {context as RaidSettingsContext}

const context = createContext<State>({
    onSettingsCreate: voidFn,
    onSettingsDeleteAll: voidFn,
    isSettingsCreatePending: false,
    isSettingsDeleteAllPending: false
})