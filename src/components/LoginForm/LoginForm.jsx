import { Field, Form, Formik } from "formik";
import s from "./LoginForm.module.css";
import { Link } from "react-router-dom";
import { loginThunk } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(loginThunk(values));
  };
  return (
    <div>
      <div className={s.container}>
        <div>
          <h1 className={s.title}>Login now!</h1>

          <div className={s.card}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              <Form className={s.form}>
                <fieldset className={s.fieldset}>
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
                    autoComplete="current-password"
                    className={s.input}
                    placeholder="Password"
                  />
                  <div>
                    <Link to="/register" className={s.link}>
                      Don't have an account? Sign up!
                    </Link>
                  </div>
                  <button type="submit" className={s.button}>
                    Login
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
  );
};

export default LoginForm;
