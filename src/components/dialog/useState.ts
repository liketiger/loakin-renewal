import { create } from 'zustand';

interface State {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  title?: string;
  description?: string;
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
}

export { useState as useAppState };

const useState = create<State>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => set(() => ({ isOpen })),
  setTitle: (title: string) => set(() => ({ title })),
  setDescription: (description: string) => set(() => ({ description })),
}));
