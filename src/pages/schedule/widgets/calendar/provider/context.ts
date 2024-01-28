import { createContext } from 'react';
import { Raids } from '../../../types/view';

type Context = {
  raids?: Raids[];
};

export { context as ScheduleContext };

const context = createContext<Context>({});
