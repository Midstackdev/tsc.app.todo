import {
  Alert,
  AlertTitle,
  Box,
  Button,
  LinearProgress,
  Stack,
  Typography,
} from '@mui/material';
import React, { FC, ReactElement, useContext, useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { TaskStatusChangedContext } from '../../context';
import { API_URL, sendApiRequest } from '../../helpers/sendApiRequest';
import { ICreateTask } from '../taskArea/interface';
import { Priority } from './enums/Priority';
import { Status } from './enums/Status';
import { DateField } from './_dateField';
import { DescriptionField } from './_descripionField';
import { SelectField } from './_selectField';
import { TitleField } from './_titleField';

export const CreateTaskForm: FC = (): ReactElement => {
  const [title, setTitle] = useState<string | undefined>(undefined);
  const [description, setDescription] = useState<string | undefined>(undefined);
  const [date, setDate] = useState<Date | null>(new Date());
  const [status, setStatus] = useState<string>(Status.todo);
  const [priority, setPriority] = useState<string>(Priority.normal);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const taskUpdatedContext = useContext(TaskStatusChangedContext)

  const { isLoading, mutate, isSuccess } = useMutation((data: ICreateTask) =>
    sendApiRequest(`${API_URL}/tasks`, 'POST', data),
  );

  const createTaskHandler = () => {
    if (!title || !date || !description) {
      return;
    }

    const task: ICreateTask = {
      title,
      description,
      date: date.toString(),
      status,
      priority,
    };
    mutate(task);
  };

  useEffect(() => {
    if (isSuccess) {
      setShowSuccess(true);
      taskUpdatedContext.toggle()
    }
    const successTimeout = setTimeout(() => {
      setShowSuccess(false);
    }, 7000);

    return () => {
      clearTimeout(successTimeout);
    };
  }, [isSuccess]);
  const statusItems = Object.keys(Status)
    .map((x) => {
      return {
        value: x,
        label: x.toLocaleUpperCase(),
      };
    })
    .filter((x) => x.value !== 'completed');
  const priorityItems = Object.keys(Priority).map((x) => {
    return {
      value: x,
      label: x.toLocaleUpperCase(),
    };
  });
  return (
    <Box
      display={'flex'}
      flexDirection="column"
      alignItems={'flex-start'}
      width="100%"
      px={4}
      my={6}
    >
      {showSuccess && (
        <Alert
          severity="success"
          sx={{
            width: '100%',
            marginBottom: '16px',
          }}
        >
          <AlertTitle>Success</AlertTitle>
          The task has been created successfully
        </Alert>
      )}
      <Typography mb={2} component="h2" variant="h6">
        Create A Task
      </Typography>
      <Stack width={'100%'} spacing={2}>
        <TitleField onChange={(e) => setTitle(e.target.value)} />
        <DescriptionField onChange={(e) => setDescription(e.target.value)} />
        <DateField value={date} onChange={(date) => setDate(date)} />
        <Stack direction={'row'} spacing={2} sx={{ width: '100%' }}>
          <SelectField
            name="status"
            label="Status"
            items={statusItems}
            value={status}
            onChange={(e) => setStatus(e.target.value as string)}
          />

          <SelectField
            name="priority"
            label="Priority"
            items={priorityItems}
            value={priority}
            onChange={(e) => setPriority(e.target.value as string)}
          />
        </Stack>
        {isLoading && <LinearProgress />}
        <Button
          variant="contained"
          size="large"
          fullWidth
          onClick={createTaskHandler}
          disabled={!title || !date || !description || isLoading}
        >
          Create A Task
        </Button>
      </Stack>
    </Box>
  );
};
