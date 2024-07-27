import React from 'react';
import SkeletonMUI, { SkeletonProps } from '@mui/material/Skeleton';

export const Skeleton: React.FC<SkeletonProps> = (props) => {
  return <SkeletonMUI {...props} />;
};
