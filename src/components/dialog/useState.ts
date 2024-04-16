import { create } from 'zustand';
import { voidFn } from '../../utils';

interface State {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  title?: string;
  description?: string;
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  onConfirm?: () => void;
  setOnConfirm: (onConfirm: () => void) => void;
  isConfirm?: boolean;
  setIsConfirm: (isConfirm: boolean) => void;
}

export { useState as useAppState };

const useState = create<State>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => set(() => ({ isOpen })),
  setTitle: (title: string) => set(() => ({ title })),
  setDescription: (description: string) => set(() => ({ description })),
  onConfirm: voidFn,
  setOnConfirm: (onConfirm: () => void) => set(() => ({ onConfirm })),
  setIsConfirm: (isConfirm: boolean) => set(() => ({ isConfirm })),
}));
