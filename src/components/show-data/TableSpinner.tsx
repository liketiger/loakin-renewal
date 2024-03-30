import { Box, CircularProgress, SxProps, TableRow } from '@mui/material';
import { Td } from '../table/Td';

type Props = {
  width?: string;
  height?: string;
  padding?: string;
  sx?: SxProps;
  size?: number;
  colspan?: number;
};

const TableSpinner = ({
  width = '100%',
  height = '100%',
  padding = '20px',
  sx,
  colspan
}: Props) => {
  console.log('hi');

  return (
    <TableRow>
      <Td colspan={colspan}>
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
      </Td>
    </TableRow>
  );
};

export default TableSpinner;
