import { Box } from '@mui/material';
import React, { CSSProperties } from 'react';

type Props = {
  children: React.ReactNode;
  sx?: CSSProperties
};

export const Body = ({ children, sx }: Props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        padding: '10px',
        gap: '10px',
        ...sx
      }}
    >
      {children}
    </Box>
  );
};
