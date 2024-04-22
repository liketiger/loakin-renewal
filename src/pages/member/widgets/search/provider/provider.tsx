import React, { useMemo } from 'react';
import { MemberSearchContext } from './context';
import { useMemberSearchQueryLogic } from './useQueryLogic';

export { Provier as MemberSearchProvider };

const Provier = ({ children }: { children: React.ReactNode }) => {
  const { updateMemberList } = useMemberSearchQueryLogic();
  const value = useMemo(() => ({ updateMemberList }), [updateMemberList]);
  return (
    <MemberSearchContext.Provider value={value}>
      {children}
    </MemberSearchContext.Provider>
  );
};
