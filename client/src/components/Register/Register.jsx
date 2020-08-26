// core
import React, { useContext, useState } from 'react';

// libs
import cogoToast from 'cogo-toast';
import { useForm } from "react-hook-form";

//hooks
import { useHttp } from '../../hooks/http.hook';

// styles
import './Form.scss';


const Register = () => {
    const { loading, request } = useHttp();

    const { handleSubmit, register, errors } = useForm();
    const onSubmit = async (values) => {
        try {
            const data = await request('/api/auth/register', 'POST', { ...values });
            cogoToast.success("Регистрация прошла успешно");

        } catch (e) {
            cogoToast.error(e.message);
        }
    }

    return (
        <div className="form-box">
            <h2 className="form-box__title">Регистрация</h2>


            <form onSubmit={handleSubmit(onSubmit)} className='form'>
                <div className='form__row'>
                    <div className='form__input'>
                        <input
                            name="email"
                            placeholder='Email'
                            type='text'
                            ref={register({
                                required: "Обязательное поле",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Некорректный email"
                                }
                            })}
                        />
                    </div>
                </div>
                <div className='errors'>
                    {errors.email && errors.email.message}
                </div>


                <div className='form__row'>
                    <div className='form__input'>
                        <input
                            name="username"
                            placeholder='Ваше имя'
                            type='text'
                            ref={register({
                                required: "Обязательное поле",
                                minLength: 4,
                            })}
                        />
                    </div>
                </div>
                <div className='errors'>
                    {errors.username && errors.username.message}
                    {errors.username?.type === "minLength" && "Минимальное кол-во символов = 4"}
                </div>


                <div className='form__row'>
                    <div className='form__input'>
                        <input
                            name="password"
                            placeholder='Password'
                            type='password'
                            ref={register({
                                required: "Обязательное поле",
                                minLength: 6,
                            })}
                        />
                    </div>
                </div>
                <div className='errors'>
                    {errors.username && errors.username.message}
                    {errors.password?.type === "minLength" && "Минимальное кол-во символов = 6"}
                </div>


                <div className='form__row'>
                    <button
                        type="submit"
                        disabled={loading}
                        className={!loading ? 'button medium secondary' : 'button medium color-loader-bar-8'}>
                        {!loading ? 'Зарегестрироваться' : 'Обработка данных'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register;