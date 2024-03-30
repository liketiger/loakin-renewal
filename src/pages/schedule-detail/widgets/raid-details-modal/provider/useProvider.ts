import { useContext } from "react"
import { RaidScheduleModalContext } from "./context"

export {useProvider as useRaidDetailsModalProvider}

const useProvider = () => {
    const {raidDetails, onUpdate} = useContext(RaidScheduleModalContext);

    return {
        raidDetails,
        onUpdate
    }
}