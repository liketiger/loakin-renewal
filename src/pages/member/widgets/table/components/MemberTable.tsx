import React from 'react';
import { CommonTableContainer } from '../../../../../components/table/CommonTableContainer';
import { CommonTable } from '../../../../../components/table/CommonTable';
import { TableBody, TableHead, TableRow } from '@mui/material';
import { Th } from '../../../../../components/table/Th';
import { ControlPanel } from '../../../../../components/control-pannel/ControlPannel';

export const MemberTable = () => {
    return (
        <CommonTableContainer>
            <CommonTable>
                <TableHead>
                    <TableRow>
                    <Th><ControlPanel isHeader={true} itemList={[]} /></Th>
                    <Th>아이템 레벨</Th>
                    <Th>캐릭터</Th>
                    <Th>직업</Th>
                    <Th>캐릭터 레벨</Th>
                    <Th>서버</Th>
                    <Th>유저</Th>
                    </TableRow>
                </TableHead>
                <TableBody>

                </TableBody>
            </CommonTable>
        </CommonTableContainer>
    );
};