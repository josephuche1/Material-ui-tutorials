import React from 'react'
import Button from '@mui/material/Button';

interface ICommonButtonProps {
    children: React.ReactNode,
    color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" |  undefined,
    disabled?: boolean,
    variant?: "text" | "outlined" | "contained",
    size?: "small" | "medium" | "large",
    sx?: object
    onClick?: (data?: any) => void
}

const CommonButton: React.FC<ICommonButtonProps> = (props) => {
 
  return (
    <Button
        color={props.color}
        disabled= {props.disabled}
        variant={props.variant}
        size={props.size}
        sx={props.sx}
        onClick={props.onClick}
    >
      {props.children}
    </Button>
  )
}

export default CommonButton
