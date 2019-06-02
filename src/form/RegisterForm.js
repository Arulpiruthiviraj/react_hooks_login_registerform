import React from 'react';
import useForm from "./useForm";

const RegisterForm = () => {
    const { values, handleChange, handleSubmit } = useForm(login);

    function login() {
        console.log(values);
    }

    return (
        <div className="section is-fullheight">
            <div className="container">
                <div className="column is-4 is-offset-4">
                    <div className="box">
                        <form onSubmit={handleSubmit}>
                            <div className="field">
                                    <label className="label">Name</label>
                                <div className="control">
                                    <input className="input" type="text" name="name" onChange={handleChange} value={values.name} required />
                                </div>
                            </div>
                            <div className="field">
                                    <label className="label">Age</label>
                                <div className="control">
                                    <input className="input" type="number" name="age" onChange={handleChange} value={values.age} required />
                                </div>
                            </div>
                            <div className="field">
                                    <label className="label">Email Address</label>
                                <div className="control">
                                    <input className="input" type="email" name="email" onChange={handleChange} value={values.email} required />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Password</label>
                                <div className="control">
                                    <input className="input" type="password" name="password" onChange={handleChange} value={values.password} required />
                                </div>
                            </div>
                            <button type="submit" className="button is-block is-info is-fullwidth">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;