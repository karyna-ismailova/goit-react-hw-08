import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import { nanoid } from "nanoid";
import { addContact } from "../../redux/contactsOps";

const ContactForm = ({ onAdd }) => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    number: "",
  };
  const handleAddContact = (values, options) => {
    const newContactList = {
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContactList));
    options.resetForm();
  };

  const applySchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .trim()
      .required("Required!"),
    number: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .trim()
      .required("Required!"),
  });

  return (
    <div className={s.formWrapper}>
      <Formik
        validationSchema={applySchema}
        initialValues={initialValues}
        onSubmit={handleAddContact}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field name="name" />
            <ErrorMessage name="name" component="div" className={s.error} />
          </label>
          <label className={s.label}>
            <span>Number</span>
            <Field name="number" />
            <ErrorMessage name="number" component="div" className={s.error} />
          </label>
          <button className={s.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default ContactForm;
