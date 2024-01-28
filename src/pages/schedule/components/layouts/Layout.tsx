import { Box } from '@mui/material';
import { ReactNode } from 'react';
import classes from './Layout.module.css';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return <Box className={classes.container}>{children}</Box>;
};

export default Layout;
