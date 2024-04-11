import CloseIcon from '@mui/icons-material/Close';
import { Box, Modal, Paper, Typography } from '@mui/material';
import {
    ReactElement,
    cloneElement,
    createContext,
    isValidElement,
    useContext,
    useState
} from 'react';
import { ModalContext } from '../../type';
import { voidFn } from '../../utils';

const ModalContext = createContext<ModalContext>({
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
}

interface WindowProps {
  children: React.ReactNode;
  name: string;
  title: string;
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

const Open = ({ children, windowName }: OpenProps) => {
  const { open } = useContext(ModalContext);

  // children이 ReactElement인지 확인
  if (!isValidElement(children)) return null;

  return cloneElement(children as ReactElement, {
    onClick: () => open(windowName)
  });
};

const Window = ({ children, name, title }: WindowProps) => {
  const { openName, close } = useContext(ModalContext);

  if (name !== openName) return null;

  return (
    <Modal open onClose={close}>
      <Paper sx={{ position: 'relative' }}>
        <Box
          onClick={close}
          sx={{ position: 'absolute', right: '5px', top: '5px' }}
        >
          <CloseIcon />
        </Box>
        <Box>
          <Typography>{title}</Typography>
          {children}
        </Box>
      </Paper>
    </Modal>
  );
};

CustomModal.Open = Open;
CustomModal.Window = Window;