import { createContext } from 'react';
import { PartyMembersParams } from '../../../types/parameter';
import { PartyMembersView } from '../../../types/view';
import { voidFn } from '../../../../../utils';

interface State {
  partyMembersList?: PartyMembersView[];
  onPartyMembersCreate: () => void;
  onPartyMembersUpdate: (params: PartyMembersParams) => void;
  onPartyMembersDelete: (id: number) => void;
  isPartyMembersCreatePending: boolean;
  isPartyMembersDeletePending: boolean;
}

export { context as ScheduleDetailPartyMembersRowContext };

const context = createContext<State>({
  onPartyMembersCreate: voidFn,
  onPartyMembersUpdate: voidFn,
  onPartyMembersDelete: voidFn,
  isPartyMembersCreatePending: false,
  isPartyMembersDeletePending: false
});
