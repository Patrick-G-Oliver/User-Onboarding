import React, { useState } from "react";
import * as yup from "yup";
import axios from "axios";

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
        password: "",
        terms: ""
    });

    return (
        <div>
            <form>
                <label htmlFor="name">
                    Name
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formState.name}
                    />
                </label>
            </form>
        </div>
    )
}

export default Form;