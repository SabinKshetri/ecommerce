import { useDispatch } from "react-redux";
import Form from "../../../globals/components/form/Form";

const Register = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Form type="register" />
    </>
  );
};

export default Register;
