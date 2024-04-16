import { Backdrop, CircularProgress, TableRow } from '@mui/material';
import {
  useRaidSettingsRowProvider
} from '../provider/useProvider';

export { BackdropWrapper as SettingsBackdropWrapper };

const BackdropWrapper = () => {
  const { isSettingsCreatePending, isSettingsDeletePending } =
    useRaidSettingsRowProvider();
  return (
    <TableRow>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isSettingsCreatePending || isSettingsDeletePending}
        component='td'
      >
        <CircularProgress color='inherit' />
      </Backdrop>
    </TableRow>
  );
};
