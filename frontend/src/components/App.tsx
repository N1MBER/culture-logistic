import React, { FC, useState } from 'react';
import {
  Theme,
  presetGpnDefault,
  presetGpnDark,
  presetGpnDisplay,
} from '@consta/uikit/Theme';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorBoundary } from './ErrorBoundary/ErrorBoundary';
import { Header } from './Layout/Header/Header';
import { MainLayout } from './Layout/MainLayout/MainLayout';
import { ThemeName } from '../types/setings';
import { ModalController } from './ModalController/ModalController';
import { RootState } from '../store/reducers';
import { Auth } from './Auth/Auth';
import { setShowAuth } from '../store/reducers/authReducer';
import { useLocationService } from '../hooks/useLocationService/useLocationService';

export const ThemeContext = React.createContext({
  theme: 'Default',
  setTheme: (_theme: 'Default' | 'Dark' | 'System') => {},
});

const App: FC = () => {
  const [theme, setTheme] = useState<ThemeName>('Default');

  const getPresetByTheme = () => {
    if (theme === 'Dark') return presetGpnDark;
    if (theme === 'Default') return presetGpnDefault;
    return presetGpnDisplay;
  };

  const dispatch = useDispatch();

  const showAuth = useSelector((store: RootState) => store.auth.showAuthWindow);
  const setVisibleModal = (flag: boolean) => {
    dispatch(setShowAuth(flag));
  };

  const locationService = useLocationService({});

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Theme preset={getPresetByTheme()} className="root">
        <ErrorBoundary>
          <Header />
          <Auth visible={showAuth} setVisibleModal={setVisibleModal} />
          <MainLayout />
        </ErrorBoundary>
        <ModalController />
      </Theme>{' '}
    </ThemeContext.Provider>
  );
};

export default App;
