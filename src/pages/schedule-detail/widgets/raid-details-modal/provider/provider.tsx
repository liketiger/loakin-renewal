import { useMemo } from "react";
import { RaidScheduleModalContext } from "./context";
import { useRaidDetailsModalQueryLogic } from "./useQueryLogic";

type Props = {
    children: React.ReactNode
}

export { Provider as RaidDetailsModalProvider };

const Provider = ({ children }: Props) => {
    const { raidDetails, onUpdate } = useRaidDetailsModalQueryLogic();
    const value = useMemo(
        () => ({
            raidDetails,
            onUpdate
        }), [raidDetails, onUpdate]
    );

    return (
        <RaidScheduleModalContext.Provider value={value}>
            {children}
        </RaidScheduleModalContext.Provider>
    )
}
