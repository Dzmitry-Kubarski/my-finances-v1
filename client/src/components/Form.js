import React, { useContext, useEffect, useState } from 'react';
import { useHttp } from '../hooks/http.hook';
import { useMessage } from '../hooks/message.hook';
import { AuthContext } from '../context/AuthContext';

const Form = ({ activeForm }) => {
    const auth = useContext(AuthContext);
    const message = useMessage();
    const { loading, request, error, clearError } = useHttp();

    const [form, setForm] = useState({
        email: '', username: '', password: ''
    })

    useEffect(() => {
        message(error);
        console.log(error);
        clearError();
    }, [error, message, clearError])

    // useEffect(() => {

    //     window.M.updateTextFields();
    // }, [])

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', { ...form });
            message(data.message);
            console.log(data.message);
        } catch (e) { }
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', { ...form });
            auth.login(data.token, data.userId, data.email);
        } catch (e) { }
    }

    return (
        <>

            {activeForm === 'loginForm' && (
                <div className="landing-form">
                    <div className="form-box login-register-form-element" style={{ display: 'block' }}>
                        <h2 className="form-box-title">Вход в аккаунт</h2>

                        <div className="form">
                            <div className="form-row">
                                <div className="form-item">
                                    <div className="form-input">
                                        {/* <label htmlFor="login-username">Email</label> */}
                                        <input type="text" id="login-username" name="email" placeholder='Email' onChange={changeHandler} />
                                    </div>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-item">
                                    <div className="form-input">
                                        {/* <label htmlFor="login-password">Password</label> */}
                                        <input type="password" id="login-password" name="password" placeholder='Password' onChange={changeHandler} />
                                    </div>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-item">
                                    <button onClick={loginHandler} className="button medium secondary">Войти в аккаунт</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}


            {activeForm === 'registerForm' && (
                <div className="landing-form">
                    <div className="form-box login-register-form-element" style={{ display: 'block' }}>
                        <h2 className="form-box-title">Регистрация</h2>

                        <div className="form">
                            <div className="form-row">
                                <div className="form-item">
                                    <div className="form-input">
                                        {/* <label htmlFor="login-username">Email</label> */}
                                        <input type="text" id="login-username" name="email" placeholder='Email' onChange={changeHandler} />
                                    </div>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-item">
                                    <div className="form-input">
                                        {/* <label htmlFor="register-username">Email</label> */}
                                        <input type="text" id="register-username" name="username" placeholder='Ваше имя' onChange={changeHandler} />
                                    </div>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-item">
                                    <div className="form-input">
                                        {/* <label htmlFor="login-password">Password</label> */}
                                        <input type="password" id="login-password" name="password" placeholder='Password' onChange={changeHandler} />
                                    </div>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-item">
                                    <button onClick={registerHandler} className="button medium secondary">Зарегестрироваться</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Form;