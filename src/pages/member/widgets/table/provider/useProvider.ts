import { useContext } from 'react';
import { MemberTableContext } from './context';

export { useProvider as useMemberTableProvider };

const useProvider = () => {
  const { memberList, deleteMemberList } =
    useContext(MemberTableContext);

  return {
    memberList,
    deleteMemberList
  };
};
