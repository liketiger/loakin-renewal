import { Dispatch, SetStateAction } from "react";

export type OptionList = {
  label: string;
  value: string;
};

export interface ControlPanelActions {
  onCreate?: () => void;
  onDelete?: () => void;
  onDeleteAll?: () => void;
  onDetail?: () => void;
}

export interface ControlPanelItem {
  text: string;
  icon: any;
  action?: (param?: () => void) => void;
}

export interface ControlPanelTextListProps {
  actions?: ControlPanelActions;
}

export interface ModalContext {
  close: () => void;
  open: (name: string) => void;
  openName: string;
}
