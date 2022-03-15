import React from 'react';
import { MainPage } from '../../../pages/MainPage/MainPage';
import { cn } from '../../../__private__/utils/bem';
import { Flex } from '../Flex/Flex';

const cnMainLayout = cn('MainLayout');

export const MainLayout = () => {
  return (
    <Flex direction="column" className={cnMainLayout()}>
      <MainPage />
    </Flex>
  );
};
