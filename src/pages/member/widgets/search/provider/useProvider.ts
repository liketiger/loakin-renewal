import { useContext } from 'react';
import { MemberSearchContext } from './context';

export { useProvider as useMemberSearchProvider };

const useProvider = () => {
  const { updateMemberList } = useContext(MemberSearchContext);
  return {
    updateMemberList
  };
};
