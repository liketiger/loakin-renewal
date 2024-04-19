import React from 'react';
import { CharacterView } from '../../../types/view';
import { TableRow } from '@mui/material';
import { Td } from '../../../../../components/table/Td';

export { Row as MemberModalTableRow };

interface Props {
  item: CharacterView;
}

const Row = ({ item }: Props) => {
  return (
    <TableRow>
      <Td>{}</Td>
      <Td>{item.CharacterName}</Td>
      <Td>{item.ItemLevel}</Td>
      <Td>{item.CharacterClassName}</Td>
    </TableRow>
  );
};
