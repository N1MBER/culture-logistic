import React from 'react';
import { SearchPlaceContainer } from '../../components/SearchPlaceContainer/SearchPlaceContainer';
import { cn } from '../../__private__/utils/bem';
import { ViewModeSwitcher } from '../../common/ViewModeSwitcher/ViewModeSwitcher';

import './MainPage.scss';

const cnMainPage = cn('MainPage');

export const MainPage = () => {
  return (
    <div className={cnMainPage()}>
      <SearchPlaceContainer />
      <ViewModeSwitcher className={cnMainPage('Switch')} />
    </div>
  );
};
