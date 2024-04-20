import AddCircleIcon from '@mui/icons-material/AddCircle';
import HelpIcon from '@mui/icons-material/Help';
import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  Button,
  Checkbox,
  TableBody,
  TableHead,
  TableRow,
  TextField,
  Tooltip,
  Typography,
  useTheme
} from '@mui/material';
import { useState } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { CustomModal } from '../../../../../components/common/CustomModal';
import { NoResult } from '../../../../../components/show-data/NoResult';
import { CommonTable } from '../../../../../components/table/CommonTable';
import { CommonTableContainer } from '../../../../../components/table/CommonTableContainer';
import { Td } from '../../../../../components/table/Td';
import { Th } from '../../../../../components/table/Th';
import { ColorPalette } from '../../../../../utils/colors';
import { useMemberState } from '../../../useState';
import { MemberModalListWidget } from '../../modal/widget';

export { Modal as MemberModal };

const Modal = () => {
  const { setCharacterName, characterName, showConfirm, setShowConfirm } =
    useMemberState(
      useShallow((state) => ({
        setCharacterName: state.setCharacterName,
        characterName: state.characterName,
        showConfirm: state.showConfirm,
        setShowConfirm: state.setShowConfirm
      }))
    );
  const theme = useTheme();
  const [formData, setFormData] = useState({
    userName: '',
    selectedCharacterList: []
  });

  const onClose = () => {
    setCharacterName('');
    setShowConfirm(false);
    setFormData({
      userName: '',
      selectedCharacterList: []
    });
  };

  const onConfirm = () => {
    onClose();
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
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          userName: e.target.value
                        }))
                      }
                      value={formData.userName}
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
                        onChange={(e) => setCharacterName(e.target.value)}
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
          <CommonTableContainer sx={{ maxHeight: '50dvh' }}>
            <CommonTable stickyHeader={true}>
              <TableHead>
                <TableRow>
                  <Th width='1%'>
                    <Checkbox />
                  </Th>
                  <Th width='8%'>캐릭터명</Th>
                  <Th width='1%'>아이템 레벨</Th>
                  <Th width='4%'>클래스</Th>
                </TableRow>
              </TableHead>
              <TableBody>
                {!showConfirm && <NoResult colsapn={4} />}
                {showConfirm && <MemberModalListWidget />}
              </TableBody>
            </CommonTable>
          </CommonTableContainer>
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
