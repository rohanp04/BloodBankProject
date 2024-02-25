import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "../../components/shared/Spinner";

const Register = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="row g-0">
          <div className=" form-banner img-fluid  ">           
          </div>
          <div className=" form-container">
            <div className="Card">
            <Form 
              formTitle={"Register"}
              submitBtn={"Register"}
              formType={"register"}
            />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;