import { create } from 'zustand';

type State = {
  date?: string;
  setDate: (date: string) => void;
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
  isCreate: boolean;
  setIsCreate: (isCreate: boolean) => void;
  modalId?: number;
  setModalId?: (modalId: number) => void;
};

export { useState as useScheduleDetailsState };

const useState = create<State>((set) => ({
  setDate: (date) =>
    set(() => ({
      date
    })),
  isModalOpen: false,
  setIsModalOpen: (isModalOpen: boolean) => set(() => ({ isModalOpen })),
  isCreate: false,
  setIsCreate: (isCreate: boolean) => set(() => ({ isCreate })),
  setModalId: (modalId: number) => set(() => ({ modalId }))
}));
