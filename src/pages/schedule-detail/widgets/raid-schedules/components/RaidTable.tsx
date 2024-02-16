import { TableBody, TableHead, TableRow } from '@mui/material';
import { CommonTable } from '../../../../../components/table/CommonTable';
import { CommonTableContainer } from '../../../../../components/table/CommonTableContainer';
import { Th } from '../../../../../components/table/Th';
import { RaidView } from '../../../types/view';
import { ScheduleDetailRaidTableRow } from './RaidTableRow';

export { RaidTable as ScheduleDetailRaidTable };

const RaidTable = () => {
  return (
    <CommonTableContainer>
      <CommonTable>
        <TableHead>
          <TableRow>
            <Th width='2%'>{}</Th>
            <Th width='6%'>시간</Th>
            <Th width='4%'>레이드</Th>
            <Th width='4%'>난이도</Th>
          </TableRow>
        </TableHead>
        <TableBody>
          <ScheduleDetailRaidTableRow item={{} as RaidView} />
          <ScheduleDetailRaidTableRow item={{} as RaidView} />
        </TableBody>
      </CommonTable>
    </CommonTableContainer>
  );
};
