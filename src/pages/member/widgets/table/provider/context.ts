import { createContext } from 'react';
import { voidFn } from '../../../../../utils';
import { MemberView } from '../../../types/view';

interface State {
  memberList?: MemberView[];
  deleteMemberList: (characterName: string) => void;
}

export { context as MemberTableContext };

const context = createContext<State>({
  deleteMemberList: voidFn
});
