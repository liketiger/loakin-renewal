import React from 'react';
import { MemberView } from '../../../types/view';
import { TableRow } from '@mui/material';
import { Td } from '../../../../../components/table/Td';

interface Props {
  item: MemberView;
}

export const MemberTableRow = ({ item }: Props) => {
  return (
    <TableRow>
      <Td>{item.CharacterLevel}</Td>
      <Td>{item.CharacterName}</Td>
      <Td>{item.ItemLevel}</Td>
      <Td>{item.CharacterClassName}</Td>
      <Td>{item.ServerName}</Td>
      <Td>{item.userName}</Td>
    </TableRow>
  );
};
