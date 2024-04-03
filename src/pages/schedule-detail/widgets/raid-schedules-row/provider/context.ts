import { createContext } from "react";
import { voidFn } from "../../../../../utils";
import { RaidParams } from "../../../types/parameter";
import { RaidView } from "../../../types/view";

interface Props {
    onRaidCreate: () => void;
    onRaidDelete: (id: number) => void;
    onRaidUpdate: (params: RaidParams) => void;
    raidList?: RaidView[];
}

export {context as RaidSchedulesRowContext};

const context = createContext<Props>({
    onRaidCreate: voidFn,
    onRaidDelete: voidFn,
    onRaidUpdate: voidFn
});