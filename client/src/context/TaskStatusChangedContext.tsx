import React, {
  createContext,
  FC,
  PropsWithChildren,
  ReactElement,
  useState,
} from 'react';

export const TaskStatusChangedContext = createContext({
  updated: false,
  toggle: () => {/**/},
});

export const TaskStatusChangedContextContextProvider: FC<PropsWithChildren> = (
  props,
): ReactElement => {
  const [updated, setUpdated] = useState(false);

  const handleToggle = () => setUpdated(!updated);
  return (
    <TaskStatusChangedContext.Provider
      value={{
        updated,
        toggle: handleToggle,
      }}
    >
      {props.children}
    </TaskStatusChangedContext.Provider>
  );
};
