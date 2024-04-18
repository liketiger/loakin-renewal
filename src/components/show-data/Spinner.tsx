import { Box, CircularProgress, SxProps } from '@mui/material';

type Props = {
  width?: string;
  height?: string;
  padding?: string;
  sx?: SxProps;
  size?: number;
};

const Spinner = ({
  width = '100%',
  height = '100%',
  padding = '20px',
  sx
}: Props) => {

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width,
        height,
        padding,
        ...sx
      }}
    >
      <CircularProgress size={30} />
    </Box>
  );
};

export default Spinner;
