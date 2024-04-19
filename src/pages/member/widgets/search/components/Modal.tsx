import AddCircleIcon from '@mui/icons-material/AddCircle';
import {
  Button,
  Input,
  TableBody,
  TableHead,
  TableRow,
  useTheme
} from '@mui/material';
import { CustomModal } from '../../../../../components/common/CustomModal';
import { CommonTable } from '../../../../../components/table/CommonTable';
import { CommonTableContainer } from '../../../../../components/table/CommonTableContainer';
import { Th } from '../../../../../components/table/Th';
import { useMemberModalProvider } from '../../modal/provider/useProvider';
import { ColorPalette } from '../../../../../utils/colors';
import { useMemberState } from '../../../useState';
import { useShallow } from 'zustand/react/shallow';
import { memberApi } from '../../../api';

export { Modal as MemberModal };

const Modal = () => {
  const { characterList } = useMemberModalProvider();
  const { setCharacterName, characterName } = useMemberState(
    useShallow((state) => ({
      setCharacterName: state.setCharacterName,
      characterName: state.characterName
    }))
  );
  const theme = useTheme();
  return (
    <CustomModal>
      <CustomModal.Open windowName='member-modal'>
        <Button
          sx={{
            borderRadius: '5px',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: theme.palette.primary.main,
            color: ColorPalette.white,
            padding: '5px 10px',
            gap: '5px',

            '&:hover': {
              backgroundColor: theme.palette.primary.dark
            }
          }}
        >
          추가
          <AddCircleIcon sx={{ borderRadius: '5px' }} />
        </Button>
      </CustomModal.Open>
      <CustomModal.Window title='캐릭터 등록' name='member-modal'>
        <Input
          onChange={(e) => setCharacterName(e.target.value)}
          value={characterName}
        />
        <CommonTableContainer>
          <CommonTable>
            <TableHead>
              <TableRow>
                <Th>{}</Th>
                <Th>캐릭터명</Th>
                <Th>아이템 레벨</Th>
                <Th>클래스</Th>
              </TableRow>
            </TableHead>
            <TableBody>
              {characterList?.map((item) => (
                <TableRow key={item.CharacterName}>
                  <Th>{}</Th>
                  <Th>{item.CharacterName}</Th>
                  <Th>{item.ItemLevel}</Th>
                  <Th>{item.CharacterClassName}</Th>
                </TableRow>
              ))}
            </TableBody>
          </CommonTable>
        </CommonTableContainer>
      </CustomModal.Window>
    </CustomModal>
  );
};
