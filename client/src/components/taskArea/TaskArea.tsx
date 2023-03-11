import { Alert, Box, Grid, LinearProgress } from '@mui/material';
import format from 'date-fns/format';
import React, { FC, ReactElement } from 'react';
import { useMutation, useQuery } from 'react-query';
import { API_URL, sendApiRequest } from '../../helpers/sendApiRequest';
import { Status } from '../createTaskForm/enums/Status';
import { Task } from '../task/Task';
import { TaskCounter } from '../taskCounter/TaskCounter';
import { ITaskApi, IUpdateTask } from './interface';

export const TaskArea: FC = (): ReactElement => {
  const getTasks = async () => {
    return await sendApiRequest<ITaskApi[]>(`${API_URL}/tasks`, 'GET');
  };
  const { error, isLoading, data, refetch } = useQuery('tasks', getTasks);
  const updateTaskMutation = useMutation((data: IUpdateTask) =>
    sendApiRequest(`${API_URL}/tasks`, 'PUT', data),
  );

  const handleStatusChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string,
  ) => {
    updateTaskMutation.mutate({
      id,
      status: e.target.checked ? Status.inProgress : Status.todo,
    });
  };
  
  const handleMarkCompleted = (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    updateTaskMutation.mutate({
      id,
      status: Status.completed,
    });
  };
  return (
    <Grid item md={8} px={4}>
      <Box mb={8} px={4}>
        <h2>Status of Your Tasks As On {format(new Date(), 'PPPP')}</h2>
      </Box>
      <Grid container display={'flex'} justifyContent="center">
        <Grid
          item
          display={'flex'}
          flexDirection="row"
          justifyContent={'space-around'}
          alignItems="center"
          md={10}
          xs={12}
          mb={8}
        >
          <TaskCounter />
          <TaskCounter />
          <TaskCounter />
        </Grid>
        <Grid item display={'flex'} flexDirection="column" xs={10} md={8}>
          <>
            {error && (
              <Alert severity="error">
                There was an error fetching your tasks
              </Alert>
            )}
            {!error && Array.isArray(data) && data?.length === 0 && (
              <Alert severity="warning">
                You do not have any tasks created yet. Start creating tasks.
              </Alert>
            )}
            {isLoading ? (
              <LinearProgress />
            ) : (
              Array.isArray(data) &&
              data?.length > 0 &&
              data?.map((task) =>
                task.status === Status.todo ||
                task.status === Status.inProgress ? (
                  <Task key={task.id} {...task} onStatusChange={handleStatusChange} onClick={handleMarkCompleted} />
                ) : (
                  false
                ),
              )
            )}
          </>
        </Grid>
      </Grid>
    </Grid>
  );
};
