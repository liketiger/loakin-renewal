import { Box } from '@mui/material';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px',
        paddingTop: ' 100px'
      }}
    >
      {children}
    </Box>
  );
};
