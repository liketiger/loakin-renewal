import { createContext } from 'react';
import { voidFn } from '../../../../../utils';

interface State {
  onPartyMembersCreate: () => void;
  onPartyMembersDeleteAll: () => void;
  isPartyMembersCreatePending: boolean;
  isPartyMembersDeleteAllPending: boolean;
}

export { context as ScheduleDetailPartyMembersContext };

const context = createContext<State>({
  onPartyMembersCreate: voidFn,
  onPartyMembersDeleteAll: voidFn,
  isPartyMembersCreatePending: false,
  isPartyMembersDeleteAllPending: false
});
