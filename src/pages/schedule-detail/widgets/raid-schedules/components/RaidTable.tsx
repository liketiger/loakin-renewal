import { TableBody, TableHead, TableRow } from '@mui/material';
import { ControlPanel } from '../../../../../components/control-pannel/ControlPannel';
import { CommonTable } from '../../../../../components/table/CommonTable';
import { CommonTableContainer } from '../../../../../components/table/CommonTableContainer';
import { Th } from '../../../../../components/table/Th';
import { getCommonControlPanelHeaderItemList } from '../../../../../constants';
import { RaidSchedulesRowWidget } from '../../raid-schedules-row/widget';
import { useRaidScheduleProvider } from '../provider/useProvider';

export { RaidTable as ScheduleDetailRaidTable };

const RaidTable = () => {
  const { onRaidCreate, onRaidDeleteAll } = useRaidScheduleProvider();
  const actions = {
    onCreate: onRaidCreate,
    onDeleteAll: onRaidDeleteAll
  };
  return (
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
  );
};
