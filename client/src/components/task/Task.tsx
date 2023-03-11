import { Box } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { Priority } from '../createTaskForm/enums/Priority';
import { Status } from '../createTaskForm/enums/Status';
import { renderPriorityBorderColor } from './helper';
import { ITask } from './interfaces';
import { TaskDiscription } from './_taskDiscription';
import { TaskFooter } from './_taskFooter';
import { TaskHeader } from './_taskHeader';

export const Task: FC<ITask> = (props): ReactElement => {
  const {
    id,
    title = 'test title',
    date = new Date(),
    description = 'Lorem ipsum dolor sit amet consectetur.',
    priority = Priority.normal,
    status = Status.completed,
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
  } = props;
  return (
    <Box
      display={'flex'}
      width="100%"
      justifyContent={'flex-start'}
      flexDirection={'column'}
      mb={4}
      p={2}
      sx={{
        width: '100%',
        backgroundColor: 'background.paper',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: renderPriorityBorderColor(priority),
      }}
    >
      <TaskHeader title={title} date={date} />
      <TaskDiscription description={description} />
      <TaskFooter id={id} status={status} onClick={onClick} onStatusChange={onStatusChange} />
    </Box>
  );
};
