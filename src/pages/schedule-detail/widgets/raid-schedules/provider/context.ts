import { createContext } from 'react';
import { voidFn } from '../../../../../utils';
import { RaidParams } from '../../../types/parameter';

type State = {
  raidDetails?: RaidParams[];
  onRaidCreate: (data: RaidParams) => void;
  onRaidUpdate: (data: RaidParams) => void;
  onRaidDelete: (idList: number[]) => void;
};

export { Context as ScheduleDetailContext };

const Context = createContext<State>({
  onRaidCreate: voidFn,
  onRaidUpdate: voidFn,
  onRaidDelete: voidFn
});
