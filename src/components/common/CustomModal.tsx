import CloseIcon from '@mui/icons-material/Close';
import { Box, Modal, Paper, Typography } from '@mui/material';
import React, {
  ReactElement,
  cloneElement,
  createContext,
  isValidElement,
  useContext,
  useState
} from 'react';
import { ModalContext as ModalContextType } from '../../type';
import { voidFn } from '../../utils';

const ModalContext = createContext<ModalContextType>({
  open: voidFn,
  close: voidFn,
  openName: ''
});

interface ModalProps {
  children?: React.ReactNode;
}

interface OpenProps {
  children: React.ReactNode;
  windowName: string;
  onClick?: () => void;
}

interface FooterProps {
  cancelBtn?: React.ReactNode;
  confirmBtn?: React.ReactNode;
  onClose?: () => void;
  onConfirm?: () => boolean;
}

interface WindowProps {
  children: React.ReactNode;
  name: string;
  title: string;
  onClose?: () => void;
}

export const CustomModal = ({ children }: ModalProps) => {
  const [openName, setOpenName] = useState<string>('');

  const close = () => setOpenName('');
  const open = (name: string) => setOpenName(name);

  return (
    <ModalContext.Provider value={{ open, close, openName }}>
      {children}
    </ModalContext.Provider>
  );
};

const Open = ({ children, windowName, onClick }: OpenProps) => {
  const { open } = useContext(ModalContext);

  // children이 ReactElement인지 확인
  if (!isValidElement(children)) return null;

  const onBtnClick = () => {
    onClick?.();
    open(windowName);
  }

  return cloneElement(children as ReactElement, {
    onClick: () => onBtnClick()
  });
};

const Footer = ({ cancelBtn, confirmBtn, onClose, onConfirm }: FooterProps) => {
  const { close } = useContext(ModalContext);

  const onCancelClick = () => {
    onClose?.();
    close();
  };

  const onConfirmClick = () => {
    onConfirm?.() && close();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '10px',
        justifyContent: 'right',
        marginTop: '20px',
        paddingRight: '10px'
      }}
    >
      {confirmBtn &&
        cloneElement(confirmBtn as ReactElement, { onClick: onConfirmClick })}
      {cancelBtn &&
        cloneElement(cancelBtn as ReactElement, { onClick: onCancelClick })}
    </Box>
  );
};

const Window = ({ children, name, title, onClose }: WindowProps) => {
  const { openName, close } = useContext(ModalContext);

  if (name !== openName) return null;

  const onModalClose = () => {
    onClose?.();
    close();
  };

  return (
    <Modal open onClose={onModalClose}>
      <Paper
        sx={{
          position: 'relative',
          width: '50dvw',
          padding: '20px',
          height: 'auto',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          paddingTop: '60px'
        }}
      >
        <Box
          onClick={onModalClose}
          sx={{ position: 'absolute', right: '5px', top: '5px', cursor: 'pointer' }}
        >
          <CloseIcon />
        </Box>
        <Box>
          <Typography
            fontWeight='bold'
            sx={{ position: 'absolute', left: '20px', top: '5px' }}
          >
            {title}
          </Typography>
          {children}
        </Box>
      </Paper>
    </Modal>
  );
};

CustomModal.Open = Open;
CustomModal.Window = Window;
CustomModal.Footer = Footer;
