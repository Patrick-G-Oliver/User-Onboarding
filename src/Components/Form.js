import React, { useState } from "react";
import * as yup from "yup";
import axios from "axios";
import { validate } from "json-schema";

const formSchema = yup.object().shape({
    name: yup
        .string()
        .required("Name is a required field"),
    email: yup 
        .string()
        .email("A valid email address is required")
        .required("An email adress must be added"),
    password: yup 
        .string()
        .required("A password is required"),
    terms: yup 
        .boolean()
        .oneOf([true], "Agree or else!")
});

const Form = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        password: "",
        terms: false
    });

    const [errorState, setErrorState] = useState({
        name: "",
        email: "",
        password: "Where's the password?",
        terms: ""
    });

    const validate = e => {
        let value = 
            e.target.type === "checkbox" ? e.target.chekced :
            e.target.value;
        yup 
            .reach(formSchema, e.target.name)
            .validate(value)
            .then(valid => {
                setErrorState({
                    ...errorState, [e.target.name]: ""
                });
            })
            .catch(err => {
                setErrorState({
                    ...errorState, [e.target.name]: err.errors[0]
                });
            });
    };

    const inputChange = e => {
        e.persist();

        validate(e);
        let value = 
            e.target.type === "checkbox" ? e.target.checked : 
            e.target.value;
        setFormState({ ...formState, [e.target.name]: value });
    }

    const clearUserForm = () => {
        setFormState({ name: "", email: "", password: "", terms: false });
    };

    const formSubmit = e => {
        e.preventDefault();
        console.log("form submission complete");
        axios
            .post(' https://reqres.in/api/users', formState)
            .then(response => console.log(response))
            .catch(err => console.log(err));
        clearUserForm();
    };

    return (
        <div>
            <form onSubmit={formSubmit}>
                <label htmlFor="name">
                    Name
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formState.name}
                        onChange={inputChange}
                    />
                </label>
                <label htmlFor="email">
                    Email 
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formState.email}
                        onChange={inputChange}
                    /> 
                    {errorState.email.length > 0 ? (
                        <p className="error">{errorState.email}</p>
                    ) : null}
                </label>
                <label htmlFor="password">
                    Password 
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={formState.password}
                        onChange={inputChange}
                    />
                </label>
                <label htmlFor="terms">
                    <input  
                        type="checkbox"
                        name="terms"
                        id="terms"
                        checked={formState.terms}
                        onChange={inputChange}
                    />
                    Terms of Service
                    {errorState.terms.length > 0 ? (
                        <p className="error">{errorState.terms}</p>
                    ) : null }
                </label>
                <button>Onboard thyself!</button>
            </form>
        </div>
    )
}

export default Form;