import { TableCell } from '@mui/material';
import React from 'react';

type Props = {
  children?: React.ReactNode;
  align?: 'center' | 'left' | 'right';
};

export const Td = ({ children, align = 'center' }: Props) => {
  return (
    <TableCell align={align} variant='body' sx={{ border: '1px solid grey', padding: '10px' }}>
      {children}
    </TableCell>
  );
};

