import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Modal, Paper, Typography } from '@mui/material';
import { useShallow } from 'zustand/react/shallow';
import { useAppState } from './useState';

export const Dialog = () => {
  const { isOpen, setIsOpen, title, description, onConfirm, isConfirm } =
    useAppState(
      useShallow((state) => ({
        isOpen: state.isOpen,
        setIsOpen: state.setIsOpen,
        title: state.title,
        description: state.description,
        onConfirm: state.onConfirm,
        isConfirm: state.isConfirm
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
        {isConfirm && (
          <Box
            sx={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}
          >
            <Button onClick={onConfirm}>확인</Button>
            <Button onClick={() => setIsOpen(false)}>취소</Button>
          </Box>
        )}
      </Paper>
    </Modal>
  );
};
