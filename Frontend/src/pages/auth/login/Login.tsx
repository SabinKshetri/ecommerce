import { useNavigate } from "react-router-dom";
import Form from "../../../globals/components/form/Form";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { login, resetStatus, Status } from "../../../store/authSlice";
import { UserLoginType } from "../types";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();
  const { status } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const handleLogin = async (data: UserLoginType) => {
    dispatch(login(data));
  };
  useEffect(() => {
    if (status === Status.Success) {
      dispatch(resetStatus());
      navigate("/");
    }
  }, [status, dispatch, navigate]);
  return (
    <>
      <Form type="login" onSubmit={handleLogin} />
    </>
  );
};

export default Login;
