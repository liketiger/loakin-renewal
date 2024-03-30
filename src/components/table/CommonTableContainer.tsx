import { TableContainer } from '@mui/material';
import React, { CSSProperties } from 'react';

type Props = {
  children: React.ReactNode;
  sx?: CSSProperties;
};

export const CommonTableContainer = ({ children, sx }: Props) => {
  return (
    <TableContainer sx={{ borderRadius: '10px', border: '1px solid grey', ...sx }}>
      {children}
    </TableContainer>
  );
};
