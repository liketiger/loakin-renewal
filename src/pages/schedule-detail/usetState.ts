import { create } from 'zustand';

type State = {
  date?: string;
  setDate: (date: string) => void;
};

export { useState as useScheduleDetailsState };

const useState = create<State>((set) => ({
  setDate: (date) =>
    set(() => ({
      date
    }))
}));
