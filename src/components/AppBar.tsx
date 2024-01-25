import { Box, Container, AppBar as MuiAppBar, Toolbar, Typography, useTheme } from '@mui/material';

const AppBar = () => {
    const theme = useTheme();
    return (
      <MuiAppBar
        position='fixed'
        sx={{
          backgroundColor: theme.palette.primary.main
        }}
      >
        <Container>
          <Toolbar disableGutters>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%'
              }}
            >
              <Typography fontWeight='bold'>LOAKIN</Typography>
              <Typography>스케쥴</Typography>
              <Box
                sx={{
                  display: 'flex',
                  width: '100px',
                  justifyContent: 'space-between'
                }}
              >
                <Typography>멤버</Typography>
                <Typography>설정</Typography>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </MuiAppBar>
    );
};

export default AppBar;