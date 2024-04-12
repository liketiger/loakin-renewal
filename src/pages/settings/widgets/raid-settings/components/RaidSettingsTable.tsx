import React from 'react';
import { CommonTableContainer } from '../../../../../components/table/CommonTableContainer';
import { CommonTable } from '../../../../../components/table/CommonTable';
import { TableBody, TableHead, TableRow } from '@mui/material';
import { Td } from '../../../../../components/table/Td';
import { Th } from '../../../../../components/table/Th';
import { ControlPanel } from '../../../../../components/control-pannel/ControlPannel';
import { getCommonControlPanelHeaderItemList } from '../../../../../constants';
import { RaidSettingsTableRowWidget } from '../../raid-settings-table-row/widget';

export const RaidSettingsTable = () => {
  const actions = {
    onCreate: () => {},
    onDeleteAll: () => {}
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
            <Th width='4%'>레이드명</Th>
            <Th width='4%'>난이도</Th>
          </TableRow>
        </TableHead>
        <TableBody>
          <RaidSettingsTableRowWidget />
        </TableBody>
      </CommonTable>
    </CommonTableContainer>
  );
};
