import { Box, Stack, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { Priority } from './enums/Priority';
import { Status } from './enums/Status';
import { DateField } from './_dateField';
import { DescriptionField } from './_descripionField';
import { SelectField } from './_selectField';
import { TitleField } from './_titleField';

export const CreateTaskForm: FC = (): ReactElement => {
  return (
    <Box
      display={'flex'}
      flexDirection="column"
      alignItems={'flex-start'}
      width="100%"
      px={4}
      my={6}
    >
      <Typography mb={2} component="h2" variant="h6">
        Create A Task
      </Typography>
      <Stack width={'100%'} spacing={2}>
        <TitleField />
        <DescriptionField />
        <DateField />
        <Stack direction={'row'} spacing={2} sx={{ width: '100%' }}>
          <SelectField
            name="status"
            label="Status"
            items={[
              {
                value: Status.todo,
                label: Status.todo.toLocaleUpperCase(),
              },
              {
                value: Status.inProgress,
                label: Status.inProgress.toLocaleUpperCase(),
              },
            ]}
          />

          <SelectField
            name="priority"
            label="Priority"
            items={[
              {
                value: Priority.low,
                label: Priority.low.toLocaleUpperCase(),
              },
              {
                value: Priority.normal,
                label: Priority.normal.toLocaleUpperCase(),
              },
              {
                value: Priority.high,
                label: Priority.high.toLocaleUpperCase(),
              },
            ]}
          />
        </Stack>
      </Stack>
    </Box>
  );
};
