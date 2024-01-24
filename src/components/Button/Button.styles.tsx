import { styled } from '@mui/material/styles';
import { ButtonProps } from './Button.types';
import Button from '@mui/material/Button';

export const StyledButton = styled(Button)<ButtonProps>(({ theme }) => {
  return {
    minWidth: 150,
    textTransform: 'initial',
    fontWeight: 400,
    '&.MuiBase': {
      minWidth: 64
    }
  };
});

export default StyledButton;
