import { useShallow } from 'zustand/react/shallow';
import { useAppState } from './useState';

interface AlertProps {
  title: string;
  description: string;
}

export const useDialog = () => {
  const { setIsOpen, setTitle, setDescription } = useAppState(
    useShallow((state) => ({
      setIsOpen: state.setIsOpen,
      setTitle: state.setTitle,
      setDescription: state.setDescription
    }))
  );

  const alert = ({ title, description }: AlertProps) => {
    setTitle(title);
    setDescription(description);
    setIsOpen(true);
  };

  return { alert };
};
