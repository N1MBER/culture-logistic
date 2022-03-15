import React from 'react';
import { Switch } from '@consta/uikit/Switch';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { setViewMode } from '../../store/reducers/settingsReducer';

type Props = {
  className?: string;
};

export const ViewModeSwitcher = (props: Props) => {
  const { className } = props;

  const dispatch = useDispatch();

  const viewMode = useSelector((store: RootState) => store.settings.viewMode);

  const handleChange = () => {
    dispatch(setViewMode(viewMode === 'map' ? 'sidebar' : 'map'));
  };

  return (
    <div className={className}>
      <Switch
        onChange={handleChange}
        checked={viewMode === 'map'}
        size="m"
        label="Map View"
      />
    </div>
  );
};
