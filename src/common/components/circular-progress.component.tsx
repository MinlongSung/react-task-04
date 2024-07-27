import React from 'react';
import CircularProgressMUI, { CircularProgressProps } from '@mui/material/CircularProgress';

export const CircularProgress: React.FC<CircularProgressProps> = (props) => {
  return <CircularProgressMUI {...props} />;
};
