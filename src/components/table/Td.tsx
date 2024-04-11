import { TableCell } from '@mui/material';
import React, { CSSProperties } from 'react';

type Props = {
  children?: React.ReactNode;
  align?: 'center' | 'left' | 'right';
  colspan?: number;
  sx?: CSSProperties
};

export const Td = ({ children, colspan, align = 'center', sx }: Props) => {
  return (
    <TableCell
      colSpan={colspan}
      align={align}
      variant='body'
      sx={{ border: '1px solid grey', padding: '10px', ...sx }}
    >
      {children}
    </TableCell>
  );
};
