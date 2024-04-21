import React from 'react';
import { CharacterView } from '../../../types/view';
import { Checkbox, TableRow } from '@mui/material';
import { Td } from '../../../../../components/table/Td';
import { useMemberState } from '../../../useState';
import { useShallow } from 'zustand/react/shallow';
import { CharacterParams } from '../../../types/parameter';

export { Row as MemberModalTableRow };

interface Props {
  item: CharacterView;
}

const Row = ({ item }: Props) => {
  const { selectedCharacterList, pushSelectedCharacterList } = useMemberState(
    useShallow((state) => ({
      selectedCharacterList: state.selectedCharacterList,
      pushSelectedCharacterList: state.pushSelectedCharacterList
    }))
  );
  return (
    <TableRow>
      <Td>
        <Checkbox
          checked={selectedCharacterList?.some(
            (el) => el.CharacterName === item.CharacterName
          ) ?? false}
          onChange={() => pushSelectedCharacterList(item as CharacterParams)}
        />
      </Td>
      <Td>{item.CharacterName}</Td>
      <Td>{+item.ItemLevel.replace(/,/g, '')}</Td>
      <Td>{item.CharacterClassName}</Td>
    </TableRow>
  );
};
