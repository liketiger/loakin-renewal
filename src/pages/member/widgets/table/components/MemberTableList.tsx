import React from 'react';
import { useMemberTableProvider } from '../provider/useProvider';
import { NoResult } from '../../../../../components/show-data/NoResult';
import { MemberTableRow } from './MemberTableRow';

export const MemberTableList = () => {
  const { memberList } = useMemberTableProvider();
  const isEmpty = memberList?.length === 0;
  return (
    <>
      {isEmpty && <NoResult colsapn={6} />}
      {!isEmpty &&
        memberList
          ?.map((item) => ({
            ...item,
            ItemLevel: Math.floor(+(item.ItemLevel as string).replace(/,/g, ''))
          }))
          .sort((curr, next) => next.ItemLevel - curr.ItemLevel)
          .map((member) => (
            <MemberTableRow key={member.CharacterName} item={member} />
          ))}
    </>
  );
};
