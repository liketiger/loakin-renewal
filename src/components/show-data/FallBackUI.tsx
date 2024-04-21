import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Box, Button, Typography } from '@mui/material';

interface Props {
  error: Error;
  resetErrorBoundary: () => void;
}

export const FallBackUI = ({ error, resetErrorBoundary }: Props) => {
  return (
    <Box
      width='100dvw'
      height='100dvh'
      display='flex'
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
    >
      <ErrorOutlineIcon />
      <Typography>에러 메세지: {error.message}</Typography>
      <Typography>새로고침 혹은 재시도를 하세요.</Typography>
      <Button onClick={resetErrorBoundary}>재시도</Button>
      <Button onClick={() => (location.href = '/')}>홈으로</Button>
    </Box>
  );
};
