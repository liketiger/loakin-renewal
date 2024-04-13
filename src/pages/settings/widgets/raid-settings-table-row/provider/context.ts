import { createContext } from 'react';
import { voidFn } from '../../../../../utils';
import { RaidSettingsParams } from '../../../types/parameter';
import { RaidSettingsView } from '../../../types/view';

interface State {
  settingsList?: RaidSettingsView[];
  onSettingsCreate: () => void;
  onSettingsDelete: (id: number) => void;
  onSettingsUpdate: (data: RaidSettingsParams) => void;
}

export { context as RaidSettingsRowContext };

const context = createContext<State>({
  onSettingsCreate: voidFn,
  onSettingsDelete: voidFn,
  onSettingsUpdate: voidFn
});
