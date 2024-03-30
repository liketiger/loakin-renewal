import React from 'react';
import { RaidDetailsModal } from './components/RaidDetailsModal';
import { RaidDetailsModalProvider } from './provider/provider';

export { Widget as RaidDetailsModalWidget };


const Widget = () => {
  return (
    <RaidDetailsModalProvider>
      <RaidDetailsModal />
    </RaidDetailsModalProvider>
  );
};
