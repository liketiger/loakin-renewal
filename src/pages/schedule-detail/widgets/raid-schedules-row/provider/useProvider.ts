import React, { useContext } from 'react';
import { RaidSchedulesRowContext } from './context';

export { useProvider as useRaidSchedulesRowProvider };

const useProvider = () => {
    const { onRaidCreate, onRaidDelete, onRaidUpdate, raidList } = useContext(RaidSchedulesRowContext);

    return {
        raidList,
        onRaidCreate,
        onRaidDelete,
        onRaidUpdate
    }
};

