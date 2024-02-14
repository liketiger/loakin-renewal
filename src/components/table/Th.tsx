import { TableCell } from '@mui/material';
import React from 'react';

type Props = {
  children: React.ReactNode | string;
  align?: 'center' | 'left' | 'right';
};

const Th = ({ children, align }: Props) => {
  return (
    <TableCell align={align} variant='head'>
      {children}
    </TableCell>
  );
};

export default Th;
