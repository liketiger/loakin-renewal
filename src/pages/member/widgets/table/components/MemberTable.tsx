import { TableBody, TableHead, TableRow } from '@mui/material';
import { CommonTable } from '../../../../../components/table/CommonTable';
import { CommonTableContainer } from '../../../../../components/table/CommonTableContainer';
import { Th } from '../../../../../components/table/Th';
import { MemberTableWidget } from '../widget';

export const MemberTable = () => {
  return (
    <CommonTableContainer>
      <CommonTable>
        <TableHead>
          <TableRow>
            <Th width='1%'>레벨</Th>
            <Th width='8%'>캐릭터명</Th>
            <Th width='2%'>아이템 레벨</Th>
            <Th width='6%'>직업</Th>
            <Th width='4%'>서버</Th>
            <Th width='2%'>유저</Th>
          </TableRow>
        </TableHead>
        <TableBody>
          <MemberTableWidget />
        </TableBody>
      </CommonTable>
    </CommonTableContainer>
  );
};
