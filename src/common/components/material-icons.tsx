import React from 'react';
import IconButtonMUI, { IconButtonProps } from '@mui/material/IconButton';
import CloseIconMUI from '@mui/icons-material/Close';

export const IconButton: React.FC<IconButtonProps> = (props) => {
  return <IconButtonMUI {...props} />;
};

export const CloseIcon: React.FC = (props) => {
  return <CloseIconMUI {...props} />;
};
