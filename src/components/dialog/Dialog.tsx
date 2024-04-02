import CloseIcon from '@mui/icons-material/Close';
import { Box, Modal, Paper, Typography } from '@mui/material';
import { useShallow } from 'zustand/react/shallow';
import { useAppState } from './useState';

export const Dialog = () => {
  const { isOpen, setIsOpen, title, description } = useAppState(
    useShallow((state) => ({
      isOpen: state.isOpen,
      setIsOpen: state.setIsOpen,
      title: state.title,
      description: state.description
    }))
  );

  return (
    <Modal
      open={isOpen}
      onClose={() => setIsOpen(false)}
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Paper sx={{ position: 'relative', width: '500px', padding: '10px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography>{title}</Typography>
          <Box sx={{ cursor: 'pointer' }} onClick={() => setIsOpen(false)}>
            <CloseIcon />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px'
          }}
        >
          <Typography>{description}</Typography>
        </Box>
      </Paper>
    </Modal>
  );
};
