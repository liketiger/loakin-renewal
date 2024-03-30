import { createContext } from 'react';
import { voidFn } from '../../../../../utils';
import { RaidView } from '../../../types/view';

type State = {
  raidList?: RaidView[];
  onRaidCreate: () => void;
  onRaidDelete: (id: number) => void;
  onRaidDeleteAll: () => void;
};

export { Context as ScheduleDetailContext };

const Context = createContext<State>({
  onRaidCreate: voidFn,
  onRaidDelete: voidFn,
  onRaidDeleteAll: voidFn
});
