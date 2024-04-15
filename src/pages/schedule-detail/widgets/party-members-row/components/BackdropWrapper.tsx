import { Backdrop, CircularProgress } from '@mui/material';
import React from 'react';
import { useScheduleDetailPartyMembersRowProvider } from '../provider/useProvider';

export { BackdropWrapper as PartyMembersRowBackdropWrapper };

const BackdropWrapper = () => {
  const { isPartyMembersCreatePending, isPartyMembersDeletePending } =
    useScheduleDetailPartyMembersRowProvider();
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isPartyMembersCreatePending || isPartyMembersDeletePending}
    >
      <CircularProgress color='inherit' />
    </Backdrop>
  );
};
