import React from 'react';

export interface ITaskHeader {
  title?: string;
  date?: Date | string;
}

export interface ITaskDescription {
  description?: string;
}

export interface ITaskFooter {
  onStatusChange?: (e: React.ChangeEvent<HTMLInputElement>, id: string) => void;
  onClick?: (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => void;
  id: string;
  status?: string;
}

export interface ITask extends ITaskHeader, ITaskDescription, ITaskFooter {
  priority?: string;
}
