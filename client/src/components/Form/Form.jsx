//core
import React, { useContext, useEffect, useState } from 'react';
import cogoToast from 'cogo-toast';

//hooks
import { useHttp } from '../../hooks/http.hook';

//context
import { AuthContext } from '../../context/AuthContext';

// styles
import './Form.scss'


const Form = ({ activeForm }) => {
    const auth = useContext(AuthContext);
    const { loading, request } = useHttp();

    const [form, setForm] = useState({
        email: '', username: '', password: ''
    })

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', { ...form });
            cogoToast.success("Регистрация прошла успешно");

        } catch (e) {
            cogoToast.error(e.message);
        }
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', { ...form });
            auth.login(data.token, data.userId, data.email);

        } catch (e) {
            cogoToast.error(e.message);
        }
    }

    return (
        <>
            {activeForm === 'loginForm' && (
                <div className="form-box">
                    <h2 className="form-box__title">Вход в аккаунт</h2>

                    <div className="form">
                        <div className="form__row">
                            <div className="form__item">
                                <div className="form__input">
                                    <input type="text" id="login-username" name="email" placeholder='Email' onChange={changeHandler} />
                                </div>
                            </div>
                        </div>

                        <div className="form__row">
                            <div className="form__item">
                                <div className="form__input">
                                    <input type="password" id="login-password" name="password" placeholder='Password' onChange={changeHandler} />
                                </div>
                            </div>
                        </div>

                        <div className="form__row">
                            <div className="form__item">
                                <button onClick={loginHandler} className="button medium secondary">Войти в аккаунт</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}


            {activeForm === 'registerForm' && (
                <div className="form-box">
                    <h2 className="form-box__title">Регистрация</h2>

                    {!loading ?
                        <div className="form">
                            <div className="form__row">
                                <div className="form__item">
                                    <div className="form__input">
                                        <input type="text" id="login-username" name="email" placeholder='Email' onChange={changeHandler} />
                                    </div>
                                </div>
                            </div>

                            <div className="form__row">
                                <div className="form__item">
                                    <div className="form__input">
                                        <input type="text" id="register-username" name="username" placeholder='Ваше имя' onChange={changeHandler} />
                                    </div>
                                </div>
                            </div>

                            <div className="form__row">
                                <div className="form__item">
                                    <div className="form__input">
                                        <input type="password" id="login-password" name="password" placeholder='Password' onChange={changeHandler} />
                                    </div>
                                </div>
                            </div>

                            <div className="form__row">
                                <div className="form__item">
                                    <button onClick={registerHandler} className="button medium secondary">Зарегестрироваться</button>
                                </div>
                            </div>
                        </div>
                        :
                        <p>обработка формы...</p>
                    }

                </div>
            )}
        </>
    );
};

export default Form;