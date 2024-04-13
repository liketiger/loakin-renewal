import React from 'react';
import { RaidSettingsTableRow } from './RaidSettingsTableRow';
import { useRaidSettingsRowProvider } from '../provider/useProvider';
import { NoResult } from '../../../../../components/show-data/NoResult';

export const RaidSettingsTableList = () => {
  const { settingsList } = useRaidSettingsRowProvider();
  const isEmpty = settingsList?.length === 0;
  return (
    <>
    {isEmpty && <NoResult colsapn={3} />}
      {!isEmpty && settingsList?.map((item, index) => (
        <RaidSettingsTableRow key={index} item={item} />
      ))}
    </>
  );
};
