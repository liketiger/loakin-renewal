import { Checkbox, Table, TableBody, TableContainer, TableHead } from '@mui/material';
import React from 'react';
import Th from '../../../components/table/Th';
import Td from '../../../components/table/Td';

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
               <TableBody>
                    
               </TableBody>
            </Table>
        </TableContainer>
    );
};

export default RaidTable;