import { Priority } from '../createTaskForm/enums/Priority';

// type enumValues = keyof typeof Priority;
// type ObjectWithKeysOfEnumAsKeys = { [key in enumValues]: string };

export const renderPriorityBorderColor = (priority: string): string => {
  switch (priority) {
    case Priority.normal:
      return 'grey.900';
    case Priority.low:
      return 'info.light';
    case Priority.high:
      return 'error.light';
    default:
      return 'grey.900';
  }
};
