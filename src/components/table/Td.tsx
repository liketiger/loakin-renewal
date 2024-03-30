import { TableCell } from '@mui/material';
import React from 'react';

type Props = {
  children?: React.ReactNode;
  align?: 'center' | 'left' | 'right';
  colspan?: number;
};

export const Td = ({ children, colspan, align = 'center' }: Props) => {
  return (
    <TableCell
      colSpan={colspan}
      align={align}
      variant='body'
      sx={{ border: '1px solid grey', padding: '10px' }}
    >
      {children}
    </TableCell>
  );
};
