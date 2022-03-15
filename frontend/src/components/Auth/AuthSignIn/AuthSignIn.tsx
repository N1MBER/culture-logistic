import { TextField, TextFieldOnChangeArguments } from '@consta/uikit/TextField';
import { Button } from '@consta/uikit/Button';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { cn } from '../../../__private__/utils/bem';
import { AuthData, AuthProps } from '../types';
import { setIsAuthorized } from '../../../store/reducers/authReducer';

import './AuthSignIn.scss';

const cnAuthSignIn = cn('AuthSignIn');

export const AuthSignIn = (props: Omit<AuthProps, 'visible'>) => {
  const { setVisibleModal } = props;

  const [data, setData] = useState<AuthData<'signin'>>({});

  const handleChange = (event: TextFieldOnChangeArguments) => {
    const { value, name } = event;
    name && value && setData({ ...data, [name]: value });
  };

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setIsAuthorized(true));
    setVisibleModal?.(false);
  };

  return (
    <div className={cnAuthSignIn()}>
      <TextField
        id="email"
        label="Email"
        placeholder="Email"
        width="full"
        name="email"
        value={data.email}
        className={cnAuthSignIn('Input')}
        onChange={handleChange}
      />
      <TextField
        id="password"
        name="password"
        placeholder="Пароль"
        width="full"
        label="Пароль"
        value={data.password}
        className={cnAuthSignIn('Input')}
        onChange={handleChange}
      />
      <Button
        width="full"
        className={cnAuthSignIn('Button')}
        label="Войти"
        type="submit"
        onClick={handleClick}
      />
    </div>
  );
};
