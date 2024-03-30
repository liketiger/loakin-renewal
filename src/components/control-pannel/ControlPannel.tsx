import React from 'react';
import { ControlPanelItem } from '../../type';
import { Box, Button, Menu, MenuItem } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ColorPalette } from '../../utils/colors';

interface Props {
  itemList?: ControlPanelItem[];
  isHeader?: boolean;
}

export const ControlPanel = ({ itemList, isHeader }: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (onAction?: () => void) => {
    onAction?.();
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        width: '30px',
        margin: '0 auto'
      }}
    >
      <Button
        onClick={handleClick}
        variant='text'
        sx={{
          minWidth: '30px',
          padding: 0,
          color: ColorPalette.black
        }}
      >
        {isHeader ? <AddBoxIcon /> : <MoreVertIcon />}
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={() => handleClose()}>
        {itemList?.map((item) => {
          if (item.text === '') return;
          return (
            <MenuItem key={item.text} onClick={() => handleClose(item.action)}>
              <>
                <item.icon sx={{ paddingRight: '5px' }} />
                {item.text}
              </>
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
};
