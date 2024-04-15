import { createContext } from 'react';
import { voidFn } from '../../../../../utils';
import { RaidView } from '../../../types/view';

type State = {
  onRaidCreate: () => void;
  onRaidDeleteAll: () => void;
  isRaidCreatePending: boolean;
  isRaidDeleteAllPending: boolean;
};

export { Context as ScheduleDetailContext };

const Context = createContext<State>({
  onRaidCreate: voidFn,
  onRaidDeleteAll: voidFn,
  isRaidCreatePending: false,
  isRaidDeleteAllPending: false
});
