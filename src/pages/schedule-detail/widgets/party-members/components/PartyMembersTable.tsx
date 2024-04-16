import {
  Backdrop,
  CircularProgress,
  TableBody,
  TableHead,
  TableRow
} from '@mui/material';
import { ControlPanel } from '../../../../../components/control-pannel/ControlPannel';
import { useDialog } from '../../../../../components/dialog/useDialog';
import { CommonTable } from '../../../../../components/table/CommonTable';
import { CommonTableContainer } from '../../../../../components/table/CommonTableContainer';
import { Th } from '../../../../../components/table/Th';
import { getCommonControlPanelHeaderItemList } from '../../../../../constants';
import { useScheduleDetailsState } from '../../../usetState';
import { ScheduleDetailPartyMembersRowWidget } from '../../party-members-row/widget';
import { useScheduleDetailPartyMembersProvider } from '../provider/useProvider';

export { PartyMembersTable as ScheduleDetailPartyMembersTable };

const PartyMembersTable = () => {
  const {
    onPartyMembersCreate,
    onPartyMembersDeleteAll,
    isPartyMembersCreatePending,
    isPartyMembersDeleteAllPending
  } = useScheduleDetailPartyMembersProvider();
  const memberCount = useScheduleDetailsState((state) => state.memberCount);

  const { alert, confirm } = useDialog();

  const actions = {
    onCreate: () => {
      if (memberCount === 8) {
        alert({ title: '알림', description: '8명이상 등록할 수 없습니다' });
        return;
      }
      onPartyMembersCreate();
    },
    onDeleteAll: () => {
      confirm({
        title: '삭제 확인',
        description: '전체 삭제하시겠습니까?',
        onConfirm: onPartyMembersDeleteAll
      });
    }
  };
  return (
    <>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isPartyMembersCreatePending || isPartyMembersDeleteAllPending}
      >
        <CircularProgress color='inherit' />
      </Backdrop>
      <CommonTableContainer>
        <CommonTable>
          <TableHead>
            <TableRow>
              <Th width='1%'>
                <ControlPanel
                  isHeader={true}
                  itemList={getCommonControlPanelHeaderItemList({ actions })}
                />
              </Th>
              <Th width='4%'>유저명</Th>
              <Th width='10%'>캐릭터명</Th>
              <Th width='4%'>아이템 레벨</Th>
              <Th width='6%'>클래스</Th>
            </TableRow>
          </TableHead>
          <TableBody>
            <ScheduleDetailPartyMembersRowWidget />
          </TableBody>
        </CommonTable>
      </CommonTableContainer>
    </>
  );
};
