import { Button } from '@mui/material';
import React, { CSSProperties } from 'react';

type Props = {
  children: React.ReactNode;
  sx?: CSSProperties;
  onClick?: () => void;
};

export const Btn = ({ children, sx, ...props }: Props) => {
  return (
    <Button variant='contained' sx={{ ...sx }} {...props}>
      {children}
    </Button>
  );
};

