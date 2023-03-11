import { Box, Button, FormControlLabel, Switch } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { ITaskFooter } from './interfaces';

export const TaskFooter: FC<ITaskFooter> = ({
  id,
  status,
  onStatusChange = (e) => console.log(e),
  onClick = (e) => console.log(e),
}): ReactElement => {
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      mt={4}
    >
      <FormControlLabel
        label="In Progress"
        control={<Switch onChange={(e) => onStatusChange(e)} color="warning" />}
      />
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{
          color: '#fff',
        }}
        onClick={(e) => onClick(e)}
      >
        Mark Complete
      </Button>
    </Box>
  );
};
