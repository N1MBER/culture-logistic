export type AuthProps = {
  visible: boolean;
  setVisibleModal?: (flag: boolean) => void;
};

export type AuthData<TYPE> = TYPE extends 'signin'
  ? {
      email?: string;
      password?: string;
    }
  : {
      login?: string;
      email?: string;
      password?: string;
      re_password?: string;
    };
