import { Field, Form, Formik } from "formik";
import s from "./RegistrationForm.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(registerThunk(values));
  };
  return (
    <div>
      <div className={s.container}>
        <div className={s.heroContent}>
          <div className={s.textBlock}>
            <h1 className={s.title}>Register now!</h1>
          </div>
          <div>
            <div className={s.card}>
              <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                  <fieldset className={s.fieldset}>
                    <label className={s.label}>Name</label>
                    <Field
                      name="name"
                      type="text"
                      className={s.input}
                      placeholder="Name"
                    />
                    <label className={s.label}>Email</label>
                    <Field
                      name="email"
                      type="email"
                      autoComplete="email"
                      className={s.input}
                      placeholder="Email"
                    />
                    <label className={s.label}>Password</label>
                    <Field
                      name="password"
                      type="password"
                      autoComplete="new-password"
                      className={s.input}
                      placeholder="Password"
                    />
                    <div>
                      <Link to="/login" className={s.link}>
                        Already have an account? Log in!
                      </Link>
                    </div>
                    <button type="submit" className={s.button}>
                      Register
                    </button>
                  </fieldset>
                </Form>
              </Formik>
            </div>
            <div className={s.backbtn}>
              <Link to="/" className={s.backButton}>
                Back Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
