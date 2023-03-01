import { Box, Chip, Typography } from '@mui/material';
import { format } from 'date-fns';
import React, { FC, ReactElement } from 'react';
import { ITaskHeader } from './interfaces';

export const TaskHeader: FC<ITaskHeader> = ({
  title = 'A Task ttle',
  date = new Date(),
}): ReactElement => {
  return (
    <Box display={'flex'} width="100%" justifyContent={'space-between'} mb={3}>
      <Box>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box>
        <Chip variant="outlined" label={format(date, 'PPPP')} />
      </Box>
    </Box>
  );
};
