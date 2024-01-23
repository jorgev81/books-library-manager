import React, { FC, useState } from 'react';
import './DatatableActionButton.scss';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export type DatatableActionOptionType<T> = {
  key: string;
  text: string;
  onClick: (key: string, row: T) => void;
};

interface DatatableActionButtonProps<T> {
  options?: DatatableActionOptionType<T>[];
  row: T;
}

const ITEM_HEIGHT = 48;

const DatatableActionButton = <T extends object>(props: DatatableActionButtonProps<T>) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleItemClick = (
    option: DatatableActionOptionType<T>,
    event: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLLIElement>
  ) => {
    event.preventDefault();
    event.stopPropagation();

    handleClose();
    option.onClick(option.key, props.row);
  };

  return (
    <div>
      <IconButton
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        aria-label="more"
        id="long-button"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        MenuListProps={{
          'aria-labelledby': 'long-button'
        }}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch'
          }
        }}
        anchorEl={anchorEl}
        id="long-menu"
        open={open}
        onClose={handleClose}
      >
        {props.options?.map((option) => (
          <MenuItem key={option.key} onClick={(event) => handleItemClick(option, event)}>
            {option.text}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default DatatableActionButton;
