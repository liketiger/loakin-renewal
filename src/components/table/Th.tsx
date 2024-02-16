import { TableCell, useTheme } from '@mui/material';
import React from 'react';

type Props = {
  children?: React.ReactNode;
  align?: 'center' | 'left' | 'right';
  width?: string;
};

export const Th = ({ children, width, align = 'center' }: Props) => {
  const theme = useTheme();
  return (
    <TableCell
      align={align}
      variant='head'
      sx={{
        backgroundColor: theme.palette.secondary.main,
        border: '1px solid grey',
        width,
        whiteSpace: 'nowrap',
        fontWeight: 'bold',
      }}
    >
      {children}
    </TableCell>
  );
};
