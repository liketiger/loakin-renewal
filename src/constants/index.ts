import { ControlPanelTextListProps } from '../type';
import DeleteIcon from '@mui/icons-material/Delete';
import { DeleteSweep } from '@mui/icons-material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const getCommonControlPanelHeaderItemList = ({
  actions
}: ControlPanelTextListProps) => {
  if (!actions) return [];
  return [
    { text: '추가', icon: AddCircleOutlineIcon, action: actions.onCreate },
    { text: '전체 삭제', icon: DeleteSweep, action: actions.onDeleteAll }
  ];
};

export const getCommonControlPanelItemList = ({
  actions
}: ControlPanelTextListProps) => {
  if (!actions) return [];
  return [
    { text: '추가', icon: AddCircleOutlineIcon, action: actions.onCreate },
    { text: '삭제', icon: DeleteIcon, action: actions.onDelete },
  ];
};
