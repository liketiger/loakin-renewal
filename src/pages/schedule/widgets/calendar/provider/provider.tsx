import { ReactNode, useMemo } from 'react';
import { ScheduleContext } from './context';
import { useScheduleQueryLogic } from './useQueryLogic';

export { Provider as ScheduleProvider };

type Props = {
  children: ReactNode;
};

const Provider = ({ children }: Props) => {
  const { raids } = useScheduleQueryLogic();

  const value = useMemo(() => ({ raids }), [raids]);
  return (
    <ScheduleContext.Provider value={value}>
      {children}
    </ScheduleContext.Provider>
  );
};
