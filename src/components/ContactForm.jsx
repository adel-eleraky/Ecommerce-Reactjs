import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import "./css/ContactForm.css"
import * as Yup from 'yup';
import { toast } from 'react-toastify';

function ContactForm() {

    const notify = () => {
        toast.success('Thanks for message. We will contact you soon', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const initialValues = {
        name: "",
        email: "",
        message: ""
    }

    const validationSchema = Yup.object({
        name: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email format").required("Required"),
        message: Yup.string().required("Required")
    })

    const submitHandler = values => {
        notify()
    }

    return (
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={submitHandler}
        >
            {({ errors, touched }) => {
                return (
                    <Form >
                        <label htmlFor="name" className="form-label"> Username </label>
                        <div className="input-group has-validation mb-4">
                            <span className="input-group-text rounded-0 rounded-start" id="basic-addon1" >
                                <i className="fa-solid fa-address-book"></i>
                            </span>
                            <Field
                                type="text"
                                id="name"
                                name="name"
                                className={`form-control ${touched.name && errors.name && "is-invalid"} `}
                                placeholder="Enter Your name"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                            <ErrorMessage name="name" component="div" className="invalid-feedback d-block fs-6" />
                        </div>
                        <label htmlFor="email" className="form-label"> Email </label>
                        <div className="input-group has-validation mb-4">
                            <span className="input-group-text rounded-0 rounded-start" id="basic-addon1" >
                                <i className="fa-regular fa-envelope"></i>
                            </span>
                            <Field
                                type="email"
                                id="email"
                                name="email"
                                className={`form-control ${touched.email && errors.email && "is-invalid"} `}
                                placeholder="Enter Your Email"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                            <ErrorMessage name="email" component="div" className="invalid-feedback d-block fs-6" />
                        </div>
                        <label htmlFor="message" className="form-label"> message </label>
                        <div className="input-group has-validation mb-4">
                            <Field
                                as="textarea"
                                id="message"
                                name="message"
                                className={`form-control ${touched.message && errors.message && "is-invalid"} `}
                                placeholder="Enter Your Message"
                                aria-label="message"
                                aria-describedby="basic-addon1"
                            />
                            <ErrorMessage name="message" component="div" className="invalid-feedback d-block fs-6" />
                        </div>
                        <button className='btn submit-btn d-block fw-bold mx-auto' type='submit'>Submit Your Message</button>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default ContactForm
