import { useDispatch } from "react-redux";
import Form from "../../../globals/components/form/Form";
import { UserDataType } from "../types";

const Register = () => {
  const dispatch = useDispatch();
  const handleRegister = (data: UserDataType) => {
    console.log("register", data);
  };

  return (
    <>
      <Form type="register" onSubmit={handleRegister} />
    </>
  );
};

export default Register;
