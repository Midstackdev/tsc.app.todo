import { Box, Stack, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { Priority } from './enums/Priority';
import { Status } from './enums/Status';
import { DateField } from './_dateField';
import { DescriptionField } from './_descripionField';
import { SelectField } from './_selectField';
import { TitleField } from './_titleField';

export const CreateTaskForm: FC = (): ReactElement => {
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
      <Typography mb={2} component="h2" variant="h6">
        Create A Task
      </Typography>
      <Stack width={'100%'} spacing={2}>
        <TitleField />
        <DescriptionField />
        <DateField />
        <Stack direction={'row'} spacing={2} sx={{ width: '100%' }}>
          <SelectField name="status" label="Status" items={statusItems} />

          <SelectField name="priority" label="Priority" items={priorityItems} />
        </Stack>
      </Stack>
    </Box>
  );
};
