import { Avatar, Box, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { Status } from '../createTaskForm/enums/Status';
import { emitCorrectBorderColor, emitCorrectLabel } from './helper';
import { ITaskCounter } from './interfaces/ITaskCounter';

export const TaskCounter: FC<ITaskCounter> = ({
  status = Status.completed,
  count = 0,
}): ReactElement => {
  return (
    <>
      <Box
        display={'flex'}
        flexDirection="column"
        justifyContent={'center'}
        alignItems="center"
      >
        <Avatar
          sx={{
            backgroundColor: 'transparent',
            border: '5px solid',
            width: '96px',
            height: '96px',
            marginBottom: '16px',
            borderColor: `${emitCorrectBorderColor(status)}`,
          }}
        >
          <Typography color={'#fff'} variant="h4">
            {count}
          </Typography>
        </Avatar>
        <Typography
          color={'#fff'}
          variant="h5"
          fontWeight={'bold'}
          fontSize="20px"
        >
          {emitCorrectLabel(status)}
        </Typography>
      </Box>
    </>
  );
};
