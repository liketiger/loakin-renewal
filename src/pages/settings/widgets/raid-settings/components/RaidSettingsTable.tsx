import {
  Backdrop,
  CircularProgress,
  TableBody,
  TableHead,
  TableRow
} from '@mui/material';
import { ControlPanel } from '../../../../../components/control-pannel/ControlPannel';
import { CommonTable } from '../../../../../components/table/CommonTable';
import { CommonTableContainer } from '../../../../../components/table/CommonTableContainer';
import { Th } from '../../../../../components/table/Th';
import { getCommonControlPanelHeaderItemList } from '../../../../../constants';
import { RaidSettingsTableRowWidget } from '../../raid-settings-table-row/widget';
import { useRaidSettingsProvider } from '../provider/useProvider';
import { useDialog } from '../../../../../components/dialog/useDialog';

export const RaidSettingsTable = () => {
  const {
    onSettingsCreate,
    onSettingsDeleteAll,
    isSettingsCreatePending,
    isSettingsDeleteAllPending
  } = useRaidSettingsProvider();

  const { confirm } = useDialog();

  const actions = {
    onCreate: onSettingsCreate,
    onDeleteAll: () => {
      confirm({
        title: '삭제 확인',
        description: '전체 삭제하시겠습니까?',
        onConfirm: onSettingsDeleteAll
      });
    }
  };
  return (
    <>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isSettingsCreatePending || isSettingsDeleteAllPending}
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
              <Th width='4%'>레이드명</Th>
              <Th width='4%'>난이도</Th>
            </TableRow>
          </TableHead>
          <TableBody>
            <RaidSettingsTableRowWidget />
          </TableBody>
        </CommonTable>
      </CommonTableContainer>
    </>
  );
};
