import {
  Backdrop,
  CircularProgress,
  TableBody,
  TableHead,
  TableRow
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ControlPanel } from '../../../../../components/control-pannel/ControlPannel';
import TableSpinner from '../../../../../components/show-data/TableSpinner';
import { CommonTable } from '../../../../../components/table/CommonTable';
import { CommonTableContainer } from '../../../../../components/table/CommonTableContainer';
import { Th } from '../../../../../components/table/Th';
import { getCommonControlPanelHeaderItemList } from '../../../../../constants';
import { useScheduleDetailsState } from '../../../usetState';
import { RaidSchedulesRowWidget } from '../../raid-schedules-row/widget';
import { useRaidScheduleProvider } from '../provider/useProvider';

export { RaidTable as ScheduleDetailRaidTable };

const RaidTable = () => {
  const {
    onRaidCreate,
    onRaidDeleteAll,
    isRaidCreatePending,
    isRaidDeleteAllPending
  } = useRaidScheduleProvider();
  const navigate = useNavigate();
  const date = useScheduleDetailsState((state) => state.date);
  const actions = {
    onCreate: onRaidCreate,
    onDeleteAll: () => {
      onRaidDeleteAll();
      navigate(`/schedule-detail/${date}`);
    }
  };
  return (
    <>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isRaidCreatePending || isRaidDeleteAllPending}
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
              <Th width='6%'>시간</Th>
              <Th width='4%'>레이드</Th>
              <Th width='4%'>난이도</Th>
            </TableRow>
          </TableHead>
          <TableBody>
            <RaidSchedulesRowWidget />
          </TableBody>
        </CommonTable>
      </CommonTableContainer>
    </>
  );
};
