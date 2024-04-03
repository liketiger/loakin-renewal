import { TableRow } from '@mui/material';
import React from 'react';
import { Td } from '../table/Td';

type Props = {
    colsapn?: number
} 

export const NoResult = ({colsapn = 1}: Props) => {
    return (
        <TableRow>
            <Td colspan={colsapn}>결과가 없습니다.</Td>
        </TableRow>
    );
};

