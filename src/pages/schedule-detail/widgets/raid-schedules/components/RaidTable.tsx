import { Table, TableBody, TableContainer, TableHead } from '@mui/material';
import Th from '../../../../../components/table/Th';

export { RaidTable as ScheduleDetailRaidTable };

const RaidTable = () => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <Th>a</Th>
          <Th>시간</Th>
          <Th>레이드</Th>
          <Th>난이도</Th>
        </TableHead>
        <TableBody></TableBody>
      </Table>
    </TableContainer>
  );
};
