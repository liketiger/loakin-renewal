import { Backdrop, CircularProgress, TableRow } from '@mui/material';
import { useScheduleDetailPartyMembersRowProvider } from '../provider/useProvider';

export { BackdropWrapper as PartyMembersRowBackdropWrapper };

const BackdropWrapper = () => {
  const { isPartyMembersCreatePending, isPartyMembersDeletePending } =
    useScheduleDetailPartyMembersRowProvider();
  return (
    <TableRow>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isPartyMembersCreatePending || isPartyMembersDeletePending}
        component='td'
      >
        <CircularProgress color='inherit' />
      </Backdrop>
    </TableRow>
  );
};
