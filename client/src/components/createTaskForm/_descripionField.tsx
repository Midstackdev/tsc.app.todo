import { TextField } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { ITextField } from './interfaces/ITextField';

export const DescriptionField: FC<ITextField> = (props): ReactElement => {
  const { onChange = (e) => console.log(e.target.value), disabled } = props;
  return (
    <TextField
      id="description"
      label="Description"
      placeholder="Description"
      variant="outlined"
      size="small"
      name="description"
      fullWidth
      multiline
      rows={4}
      disabled={disabled}
      onChange={onChange}
    />
  );
};
