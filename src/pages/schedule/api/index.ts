import { getRaids } from '../../../services/raids/getRaids';

const url = {
  getRaids: getRaids
};

export const scheduleApi = {
  getRaids: url.getRaids
};
