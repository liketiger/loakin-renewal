import {
  Box,
  Container,
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  useTheme
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AppBar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <MuiAppBar
      position='fixed'
      sx={{
        backgroundColor: theme.palette.primary.main
      }}
    >
      <Container sx={{ width: '100%' }}>
        <Toolbar sx={{ width: '100%' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%'
            }}
          >
            <Box
              sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
              onClick={() => navigate('/')}
            >
              <Typography>LOAKIN</Typography>
            </Box>
            <Box
              sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
              onClick={() => navigate('/')}
            >
              <Typography>스케쥴</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                width: '100px',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <Typography onClick={() => navigate('/member')}>멤버</Typography>
              <Typography sx={{ cursor: 'pointer' }} onClick={() => navigate('/settings')}>
                설정
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
};

export default AppBar;
