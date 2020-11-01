// core
import React, { useContext, useState } from 'react';

// libs
import cogoToast from 'cogo-toast';

//hooks
import { useHttp } from '../../hooks/http.hook';

//context
import { AuthContext } from '../../context/AuthContext';

// styles
import './Form.scss';


const Login = () => {
    const auth = useContext(AuthContext);
    const { loading, request } = useHttp();

    const [form, setForm] = useState({
        email: '', username: '', password: ''
    })

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value });
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
        <div className="form-box">
            <h2 className="form-box__title">Вход в аккаунт</h2>

            <div className="form">
                <div className="form__row">
                    <div className="form__item">
                        <div className="form__input">
                            <input type="text" id="login-username" name="email" placeholder='Email' onChange={changeHandler} autoFocus={true} />
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
                        <button onClick={loginHandler}
                            disabled={loading}
                            className={!loading ? 'button medium secondary' : 'button medium color-loader-bar-8'}>
                            {!loading ? 'Войти в аккаунт' : 'Обработка данных'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;