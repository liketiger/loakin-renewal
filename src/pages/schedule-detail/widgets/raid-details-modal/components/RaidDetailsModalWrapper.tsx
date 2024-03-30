import React from 'react';
import { useScheduleDetailsState } from '../../../usetState';
import { RaidDetailsModal } from './RaidDetailsModal';

export const RaidDetailsModalWrapper = () => {
    const isModalOpen = useScheduleDetailsState(state => state.isModalOpen)
    return (
        <>{isModalOpen && <RaidDetailsModal />}</>
    );
};

