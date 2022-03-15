import React, { useState } from 'react';
import { Modal } from '@consta/uikit/Modal';
import { Text } from '@consta/uikit/Text';
import { IconClose } from '@consta/uikit/IconClose';
import { Logo } from '../../graphic/Logo/Logo';
import { cn } from '../../__private__/utils/bem';
import './Auth.scss';
import { AuthProps } from './types';
import { AuthSignIn } from './AuthSignIn/AuthSignIn';
import { AuthSignUp } from './AuthSignUp/AuthSignUp';

const cnAuth = cn('Auth');

const AuthRender = (props: Omit<AuthProps, 'visible'>) => {
  const { setVisibleModal } = props;
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');

  return (
    <div className={cnAuth()}>
      <button
        type="button"
        className={cnAuth('CloseButton')}
        onClick={() => setVisibleModal?.(false)}
      >
        <IconClose size="s" />
      </button>
      <Text weight="bold" size="xl" className={cnAuth('Title')}>
        <Logo /> <p>{mode === 'signin' ? 'Войти' : 'Регистрация'}</p>
      </Text>
      <div
        className={cnAuth('Switcher', {
          mode,
        })}
      >
        <button
          className={cnAuth('SwitcherButton', {
            active: mode === 'signin',
          })}
          type="button"
          onClick={() => setMode('signin')}
        >
          <Text weight="regular" size="m">
            Войти
          </Text>
        </button>
        <button
          className={cnAuth('SwitcherButton', {
            active: mode === 'signup',
          })}
          type="button"
          onClick={() => setMode('signup')}
        >
          <Text weight="regular" size="m">
            Регистрация
          </Text>
        </button>
      </div>
      {mode === 'signin' ? (
        <AuthSignIn setVisibleModal={setVisibleModal} />
      ) : (
        <AuthSignUp setVisibleModal={setVisibleModal} />
      )}
    </div>
  );
};

export const Auth = (props: AuthProps) => {
  const { visible, ...otherProps } = props;
  return (
    <Modal isOpen={visible} hasOverlay>
      <AuthRender {...otherProps} />
    </Modal>
  );
};
