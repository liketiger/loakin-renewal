import AddCircleIcon from '@mui/icons-material/AddCircle';
import HelpIcon from '@mui/icons-material/Help';
import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  Button,
  TableBody,
  TableRow,
  TextField,
  Tooltip,
  Typography,
  useTheme
} from '@mui/material';
import { useState } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { CustomModal } from '../../../../../components/common/CustomModal';
import { useDialog } from '../../../../../components/dialog/useDialog';
import { CommonTable } from '../../../../../components/table/CommonTable';
import { CommonTableContainer } from '../../../../../components/table/CommonTableContainer';
import { Td } from '../../../../../components/table/Td';
import { Th } from '../../../../../components/table/Th';
import { ColorPalette } from '../../../../../utils/colors';
import { useMemberState } from '../../../useState';
import { convertToMemberParams } from '../../../utils';
import { MemberModalCharacterTableWidget } from '../../modal/widget';
import { useMemberSearchProvider } from '../provider/useProvider';

export { Modal as MemberModal };

const Modal = () => {
  const {
    setCharacterName,
    characterName,
    showConfirm,
    setShowConfirm,
    setSelectedCharacterList,
    selectedCharacterList
  } = useMemberState(
    useShallow((state) => ({
      setCharacterName: state.setCharacterName,
      characterName: state.characterName,
      showConfirm: state.showConfirm,
      setShowConfirm: state.setShowConfirm,
      setSelectedCharacterList: state.setSelectedCharacterList,
      selectedCharacterList: state.selectedCharacterList
    }))
  );
  const theme = useTheme();
  const [userName, setUserName] = useState('');
  const { updateMemberList } = useMemberSearchProvider();
  const { alert } = useDialog();

  const onClose = () => {
    setCharacterName('');
    setShowConfirm(false);
    setUserName('');
    setSelectedCharacterList([]);
  };

  const onConfirm = () => {
    if (!userName) {
      alert({ title: '알림', description: '유저명을 입력하세요' });
      return false;
    }
    if (selectedCharacterList?.length === 0) {
      alert({ title: '알림', description: '캐릭터를 선택하세요' });
      return false;
    }
    updateMemberList(
      convertToMemberParams(selectedCharacterList ?? [], userName)
    );
    onClose();
    return true;
  };
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
            whiteSpace: 'nowrap',
            width: '120px',

            '&:hover': {
              backgroundColor: theme.palette.primary.dark
            }
          }}
        >
          추가
          <AddCircleIcon sx={{ borderRadius: '5px' }} />
        </Button>
      </CustomModal.Open>
      <CustomModal.Window
        title='캐릭터 등록'
        name='member-modal'
        onClose={onClose}
      >
        <Box display='flex' flexDirection='column' gap='10px'>
          <CommonTableContainer>
            <CommonTable>
              <TableBody>
                <TableRow>
                  <Th>유저명</Th>
                  <Td align='left'>
                    <TextField
                      onChange={(e) => setUserName(e.target.value)}
                      value={userName}
                      sx={{ width: '50%' }}
                      placeholder='ex) 홍길동'
                    />
                  </Td>
                </TableRow>
                <TableRow>
                  <Th>
                    <Box
                      display='flex'
                      gap='5px'
                      alignItems='center'
                      justifyContent='center'
                    >
                      캐릭터 검색
                      <Tooltip
                        title={
                          <Typography fontSize='15px'>
                            유저가 보유한 캐릭터 이름들중 하나를 검색하면 해당
                            유저에 속한 모든 나머지 캐릭터들이 검색됩니다.
                          </Typography>
                        }
                        arrow
                      >
                        <HelpIcon sx={{ color: ColorPalette.gray }} />
                      </Tooltip>
                    </Box>
                  </Th>
                  <Td>
                    <Box display='flex' gap='10px'>
                      <TextField
                        onChange={(e) => {
                          setShowConfirm(false);
                          setCharacterName(e.target.value);
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            setShowConfirm(true);
                          }
                        }}
                        value={characterName}
                        sx={{ width: '100%' }}
                        placeholder='캐릭터명으로 검색'
                      />
                      <Button
                        onClick={() => setShowConfirm(true)}
                        sx={{
                          backgroundColor: theme.palette.secondary.light,
                          color: ColorPalette.white
                        }}
                      >
                        <SearchIcon />
                      </Button>
                    </Box>
                  </Td>
                </TableRow>
              </TableBody>
            </CommonTable>
          </CommonTableContainer>
          {showConfirm && <MemberModalCharacterTableWidget />}
          <CustomModal.Footer
            confirmBtn={<Button>저장</Button>}
            cancelBtn={<Button>취소</Button>}
            onClose={onClose}
            onConfirm={onConfirm}
          />
        </Box>
      </CustomModal.Window>
    </CustomModal>
  );
};
