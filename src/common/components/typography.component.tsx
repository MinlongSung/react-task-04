import React from 'react';
import TypographyMUI, { TypographyProps } from '@mui/material/Typography';

export const Typography: React.FC<TypographyProps> = (props) => {
  return <TypographyMUI {...props} />;
};
