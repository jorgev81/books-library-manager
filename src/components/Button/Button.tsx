import { ButtonProps, DefaultProps } from './Button.types';
import { StyledButton } from './Button.styles';

const Button = (props: ButtonProps) => {
  return <StyledButton {...props} />;
};

Button.defaultProps = DefaultProps;

export default Button;
