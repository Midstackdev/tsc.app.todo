import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import React, { FC, ReactElement } from 'react';
import { IDateField } from './interfaces/IDateField';

export const DateField: FC<IDateField> = ({
  value,
  disabled,
  onChange = (e) => console.log(e),
}): ReactElement => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Task Date"
          inputFormat="dd/MM/yyyy"
          value={value}
          onChange={onChange}
          renderInput={(params) => <TextField {...params} />}
          disabled={disabled}
        />
      </LocalizationProvider>
    </>
  );
};
