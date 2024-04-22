import React, { useMemo } from 'react';
import { MemberTableContext } from './context';
import { useMemberTableQueryLogic } from './useQueryLogic';

export { Provider as MemberTableProvider };

interface Props {
  children: React.ReactNode;
}

const Provider = ({ children }: Props) => {
  const { memberList, deleteMemberList } =
    useMemberTableQueryLogic();
  const value = useMemo(
    () => ({
      memberList,
      deleteMemberList
    }),
    [memberList, deleteMemberList]
  );
  
  return (
    <MemberTableContext.Provider value={value}>
      {children}
    </MemberTableContext.Provider>
  );
};
