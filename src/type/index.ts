export type OptionList = {
  label: string;
  value: string;
};


export interface ControlPanelActions {
  onCreate?: () => void;
  onDelete?: () => void;
  onDeleteAll?: () => void;
}

export interface ControlPanelItem {
  text: string;
  icon: any;
  action?: (param?: () => void) => void;
}

export interface ControlPanelTextListProps {
  actions?: ControlPanelActions;
}