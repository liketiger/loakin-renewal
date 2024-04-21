import { Checkbox, TableBody, TableHead, TableRow } from '@mui/material';
import { useShallow } from 'zustand/react/shallow';
import { CommonTable } from '../../../../../components/table/CommonTable';
import { CommonTableContainer } from '../../../../../components/table/CommonTableContainer';
import { Th } from '../../../../../components/table/Th';
import { CharacterParams } from '../../../types/parameter';
import { useMemberState } from '../../../useState';
import { useMemberModalProvider } from '../provider/useProvider';
import { MemberModalTableRow } from './Row';

export { ModalCharacterTable as MemberModalCharacterTable };

const ModalCharacterTable = (): React.ReactNode => {
  const { characterList } = useMemberModalProvider();
  const { setSelectedCharacterList, selectedCharacterList, showConfirm } =
    useMemberState(
      useShallow((state) => ({
        setSelectedCharacterList: state.setSelectedCharacterList,
        selectedCharacterList: state.selectedCharacterList,
        showConfirm: state.showConfirm
      }))
    );

  return (
    <CommonTableContainer sx={{ maxHeight: '50dvh' }}>
      <CommonTable stickyHeader={true}>
        <TableHead>
          <TableRow>
            <Th width='1%'>
              <Checkbox
                onChange={() =>
                  setSelectedCharacterList(characterList as CharacterParams[])
                }
                checked={
                  selectedCharacterList?.length === characterList?.length
                }
              />
            </Th>
            <Th width='8%'>캐릭터명</Th>
            <Th width='1%'>아이템 레벨</Th>
            <Th width='4%'>클래스</Th>
          </TableRow>
        </TableHead>
        <TableBody>
          {characterList?.map((item) => (
            <MemberModalTableRow key={item.CharacterName} item={item} />
          ))}
        </TableBody>
      </CommonTable>
    </CommonTableContainer>
  );
};
