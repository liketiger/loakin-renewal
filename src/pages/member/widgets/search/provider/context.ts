import { createContext } from 'react';
import { voidFn } from '../../../../../utils';
import { MemberParams } from '../../../types/parameter';

interface State {
  updateMemberList: (characterList: MemberParams[]) => void;
}

export { context as MemberSearchContext };

const context = createContext<State>({
  updateMemberList: voidFn
});
