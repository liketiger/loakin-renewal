import { createContext } from "react";
import { RaidParams } from "../../../types/parameter";
import { RaidView } from "../../../types/view";
import { voidFn } from "../../../../../utils";

interface State {
    raidDetails?: RaidView
    onUpdate: (data: RaidParams) => void
}

export {Context as RaidScheduleModalContext};

const Context = createContext<State>({
    onUpdate: voidFn
});