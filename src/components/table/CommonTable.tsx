import { Table } from '@mui/material';
import React, { CSSProperties } from 'react';

type Props = {
  children: React.ReactNode;
  sx?: CSSProperties;
};

export const CommonTable = ({ children, sx }: Props) => {
  return <Table sx={{ borderStyle: 'hidden', ...sx }}>{children}</Table>;
};
