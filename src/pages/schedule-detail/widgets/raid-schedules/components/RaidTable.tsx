import { TableBody, TableHead, TableRow } from '@mui/material';
import { NoResult } from '../../../../../components/common/NoResult';
import { CommonTable } from '../../../../../components/table/CommonTable';
import { CommonTableContainer } from '../../../../../components/table/CommonTableContainer';
import { Th } from '../../../../../components/table/Th';
import { ScheduleDetailRaidTableRow } from './RaidTableRow';
import { useRaidScheduleProvider } from '../provider/useProvider';
import { RaidView } from '../../../types/view';
import { ControlPanel } from '../../../../../components/control-pannel/ControlPannel';
import { getCommonControlPanelHeaderItemList } from '../../../../../constants';

export { RaidTable as ScheduleDetailRaidTable };

const RaidTable = () => {
  const { raidList, onRaidCreate, onRaidDeleteAll } = useRaidScheduleProvider();
  const isListEmpty = raidList?.length === 0;
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
          {isListEmpty && <NoResult colsapn={4} />}
          {!isListEmpty &&
            raidList?.map((item: RaidView) => (
              <ScheduleDetailRaidTableRow key={item.id} item={item} />
            ))}
        </TableBody>
      </CommonTable>
    </CommonTableContainer>
  );
};
