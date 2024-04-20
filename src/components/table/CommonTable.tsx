import { Table } from '@mui/material';
import React, { CSSProperties } from 'react';

type Props = {
  children: React.ReactNode;
  sx?: CSSProperties;
  stickyHeader?: boolean;
};

export const CommonTable = ({ children, sx, stickyHeader }: Props) => {
  return <Table sx={{ borderStyle: 'hidden', ...sx }} stickyHeader={stickyHeader}>{children}</Table>;
};
