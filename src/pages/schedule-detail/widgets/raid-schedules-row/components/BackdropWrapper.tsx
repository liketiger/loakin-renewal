import { Backdrop, CircularProgress } from '@mui/material';
import {
  useRaidSchedulesRowProvider
} from '../provider/useProvider';

export { BackdropWrapper as RaidBackdropWrapper };

const BackdropWrapper = () => {
  const { isRaidCreatePending, isRaidDeletePending } =
    useRaidSchedulesRowProvider();
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isRaidCreatePending || isRaidDeletePending}
    >
      <CircularProgress color='inherit' />
    </Backdrop>
  );
};
