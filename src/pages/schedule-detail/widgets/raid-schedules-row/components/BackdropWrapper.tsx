import { Backdrop, CircularProgress, TableRow } from '@mui/material';
import { useRaidSchedulesRowProvider } from '../provider/useProvider';
import { Td } from '../../../../../components/table/Td';

export { BackdropWrapper as RaidBackdropWrapper };

const BackdropWrapper = () => {
  const { isRaidCreatePending, isRaidDeletePending } =
    useRaidSchedulesRowProvider();
  return (
    <TableRow>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isRaidCreatePending || isRaidDeletePending}
        component='td'
      >
        <CircularProgress color='inherit' />
      </Backdrop>
    </TableRow>
  );
};
