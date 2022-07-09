import '../../Styles/NewsletterForm.scss';

import React, { useState } from "react";
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as yup from 'yup'

type InitialValues = {
    email: string,
    name: string
}

const Register = () => {
    const [isSubmitting, setSubmitting] = useState(false);
    const [message] = useState('');
    
    const onSubmit = (values: InitialValues ) => {
        setSubmitting(true)
    }
    const initialValues : InitialValues = {
        email: '',
        name: ''
    }
    return(
        <>
        <Formik 
      initialValues={initialValues}
      validationSchema={yup.object({
        email: yup.string().required('adres e-mail jest wymagany'),
        name: yup.string().email('adres e-mail nie poprawny')
      })}
      onSubmit={onSubmit}
      >
        {() => <header>
          <Form id='newsletter-form'>
            <label htmlFor='name'></label>
            <Field placeholder="Twoje imię" autoComplete="name" name="name" type="text"/>
            <ErrorMessage name="name">
              {msg => <span className="error">{msg}</span>}
            </ErrorMessage>
            <Field placeholder="Twój adres e-mail" autoComplete="email" name="email" type="email"/>
            <ErrorMessage name="email">
              {msg => <span className="error">{msg}</span>}
            </ErrorMessage>
            <Field name="submit" type="submit" value="Zapisuje się!" disabled={isSubmitting}/>
            {message}
          </Form>
        </header>}
      </Formik>
    </>
    )
}

export default Register;