import './CustomButton.css'
import Button from '@mui/material/Button';

export const CustomButton = ({
  children,
  type,
  onClick,
  variant,
  color,
  size,
  style
}: any) => {

  return (
    <Button
      style={style}
      size={size}
      type={type}
      onClick={onClick}
      variant={variant}
      color={color}
    >
      {children}
    </Button>
  );
};