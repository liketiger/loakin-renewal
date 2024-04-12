import React from 'react';
import { RaidSettingsTableRow } from './RaidSettingsTableRow';

export const RaidSettingsTableList = () => {
  return (
    <>
      {[{ id: 1, name: 'hi', level: 'hi2' }].map((item, index) => (
        <RaidSettingsTableRow key={index} item={item} />
      ))}
    </>
  );
};
