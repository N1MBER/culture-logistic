import { TextField, TextFieldOnChangeArguments } from '@consta/uikit/TextField';
import { Button } from '@consta/uikit/Button';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { cn } from '../../../__private__/utils/bem';
import { AuthData, AuthProps } from '../types';
import { setIsAuthorized } from '../../../store/reducers/authReducer';

import './AuthSignUp.scss';

const cnAuthSignUp = cn('AuthSignUp');

export const AuthSignUp = (props: Omit<AuthProps, 'visible'>) => {
  const { setVisibleModal } = props;

  const [data, setData] = useState<AuthData<'signup'>>({});

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
    <div className={cnAuthSignUp()}>
      <TextField
        id="email"
        label="Email"
        placeholder="Email"
        width="full"
        name="email"
        value={data.email}
        className={cnAuthSignUp('Input')}
        onChange={handleChange}
      />
      <TextField
        id="login"
        label="Логин"
        placeholder="Логин"
        width="full"
        name="login"
        value={data.login}
        className={cnAuthSignUp('Input')}
        onChange={handleChange}
      />
      <TextField
        id="password"
        name="password"
        placeholder="Пароль"
        width="full"
        label="Пароль"
        value={data.password}
        className={cnAuthSignUp('Input')}
        onChange={handleChange}
      />
      <TextField
        id="re_password"
        name="re_password"
        placeholder="Проверка пароля"
        width="full"
        label="Проверка пароля"
        value={data.re_password}
        className={cnAuthSignUp('Input')}
        onChange={handleChange}
      />
      <Button
        width="full"
        className={cnAuthSignUp('Button')}
        label="Войти"
        onClick={handleClick}
      />
    </div>
  );
};
