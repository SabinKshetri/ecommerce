export interface Props {
  type: string;
  onSubmit: (data: UserDataType) => void;
}

export interface UserDataType {
  email: string;
  username: string;
  password: string;
}

export interface UserLoginType {
  email: string;
  password: string;
}
