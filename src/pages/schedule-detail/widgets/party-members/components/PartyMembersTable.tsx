import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { CommonTableContainer } from '../../../../../components/table/CommonTableContainer';
import { CommonTable } from '../../../../../components/table/CommonTable';
import { TableBody, TableHead, TableRow } from '@mui/material';
import { Th } from '../../../../../components/table/Th';
import { ControlPanel } from '../../../../../components/control-pannel/ControlPannel';
import { getCommonControlPanelHeaderItemList } from '../../../../../constants';
import { ScheduleDetailPartyMembersRowWidget } from '../../party-members-row/widget';
import { useScheduleDetailPartyMembersProvider } from '../provider/useProvider';

export { PartyMembersTable as ScheduleDetailPartyMembersTable };

const PartyMembersTable = () => {
  const { onPartyMembersCreate, onPartyMembersDeleteAll } = useScheduleDetailPartyMembersProvider();
  const actions = {
    onCreate: onPartyMembersCreate,
    onDeleteAll: () => onPartyMembersDeleteAll()
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
            <Th width='10%'>캐릭터명</Th>
            <Th width='4%'>아이템 레벨</Th>
            <Th width='6%'>클래스</Th>
            <Th width='4%'>유저명</Th>
          </TableRow>
        </TableHead>
        <TableBody>
            <ScheduleDetailPartyMembersRowWidget />
        </TableBody>
      </CommonTable>
    </CommonTableContainer>
  );
};
