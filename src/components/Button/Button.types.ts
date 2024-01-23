// Using an alias to keep the props name of material.
// This file needs to import the correct MUI_COMPONENT_NAME_PROPS and the route inside @mui
import { ButtonProps as MuiButtonProps } from '@mui/material/Button';

export interface ButtonProps extends MuiButtonProps {
  target?: string;
};

export const DefaultProps = {
  variant: 'contained'
};
