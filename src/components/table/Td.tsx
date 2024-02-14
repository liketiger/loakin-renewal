import { TableCell } from '@mui/material';
import React from 'react';

type Props = {
  children: React.ReactNode | string;
  align?: 'center' | 'left' | 'right';
};

const Td = ({ children, align = 'center' }: Props) => {
  return (
    <TableCell align={align} variant='body'>
      {children}
    </TableCell>
  );
};

export default Td;
