import { createContext } from "react"
import { voidFn } from "../../../../../utils"

interface State {
    onSettingsCreate: () => void
    onSettingsDeleteAll: () => void
}

export {context as RaidSettingsContext}

const context = createContext<State>({
    onSettingsCreate: voidFn,
    onSettingsDeleteAll: voidFn
})