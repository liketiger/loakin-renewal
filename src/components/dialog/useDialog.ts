import { useShallow } from 'zustand/react/shallow';
import { useAppState } from './useState';

interface AlertProps {
  title: string;
  description: string;
}

interface ConfirmProps {
  title: string;
  description: string;
  onConfirm: () => void;
}

export const useDialog = () => {
  const { setIsOpen, setTitle, setDescription, setOnConfirm, setIsConfirm } =
    useAppState(
      useShallow((state) => ({
        setIsOpen: state.setIsOpen,
        setTitle: state.setTitle,
        setDescription: state.setDescription,
        setOnConfirm: state.setOnConfirm,
        setIsConfirm: state.setIsConfirm
      }))
    );

  const alert = ({ title, description }: AlertProps) => {
    setTitle(title);
    setDescription(description);
    setIsOpen(true);
  };

  const confirm = ({ title, description, onConfirm }: ConfirmProps) => {
    setTitle(title);
    setDescription(description);
    setOnConfirm(() => {
      onConfirm?.();
      setIsOpen(false);
      setIsConfirm(false);
    });
    setIsOpen(true);
    setIsConfirm(true);
  };

  return { alert, confirm };
};
