import React from 'react';
import { useMemberModalProvider } from '../provider/useProvider';
import { MemberModalTableRow } from './Row';

export { WindowContent as MemberModalTableList };

const WindowContent = () => {
  const { characterList } = useMemberModalProvider();
  return (
    <>
      {characterList?.map((item) => (
        <MemberModalTableRow key={item.CharacterName} item={item} />
      ))}
    </>
  );
};
