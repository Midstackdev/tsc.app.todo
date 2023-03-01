import { Box, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { ITaskDescription } from './interfaces';

export const TaskDiscription: FC<ITaskDescription> = ({
  description = 'lorem',
}): ReactElement => {
  return (
    <Box>
      <Typography>{description}</Typography>
    </Box>
  );
};
