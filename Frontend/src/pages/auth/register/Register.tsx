import Form from "../../../globals/components/form/Form";
import { UserDataType } from "../types";
import { register, resetStatus, Status } from "../../../store/authSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Register = () => {
  const navigate = useNavigate();
  const { status } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();
  const handleRegister = (data: UserDataType) => {
    dispatch(register(data));
  };

  useEffect(() => {
    if (status === Status.Success) {
      dispatch(resetStatus());
      navigate("/login");
    }
  }, [status, navigate, dispatch]);

  return (
    <>
      <Form type="register" onSubmit={handleRegister} />
    </>
  );
};

export default Register;
