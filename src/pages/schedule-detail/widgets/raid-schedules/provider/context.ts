import { createContext } from 'react';
import { voidFn } from '../../../../../utils';
import { RaidView } from '../../../types/view';

type State = {
  onRaidCreate: () => void;
  onRaidDeleteAll: () => void;
};

export { Context as ScheduleDetailContext };

const Context = createContext<State>({
  onRaidCreate: voidFn,
  onRaidDeleteAll: voidFn
});
