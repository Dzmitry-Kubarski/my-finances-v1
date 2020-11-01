//core
import React from 'react';

// redux
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

// actions
import { selectActiveRegisterForm, selectActiveLoginForm } from '../../redux/auth/actions';

// components
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';

//images
import logoSvg from '../../images/logo.svg';

// styles
import './AuthPage.scss';


const AuthPage = () => {
    const activeForm = useSelector(state => state.auth.activeForm);
    const dispatch = useDispatch()

    const selectActiveRegisterFormHandler = () => {
        dispatch(selectActiveRegisterForm())
    }

    const selectActiveLoginFormHandler = () => {
        dispatch(selectActiveLoginForm())
    }

    return (
        <div className="auth">
            <div className='container'>
                <div className='auth__inner'>
                    <div className='auth__decoration'></div>

                    <div className="auth__content">
                        <div className="logo  auth__logo">
                            <img className='logo__img' src={logoSvg} alt="logo" />
                        </div>

                        <h2 className="auth__subtitle">Welcome to</h2>
                        <h1 className="auth__title">Finance</h1>

                        <p className="auth__text">
                            Данное приложение поможет вам вести учёт расходов и доходов
                        </p>

                        <div className="auth__tabs">
                            <p className={activeForm === 'loginForm' ? 'auth__tab active' : 'auth__tab'}
                                onClick={selectActiveLoginFormHandler}
                            >
                                Login
                            </p>


                            <p className={activeForm === 'registerForm' ? 'auth__tab active' : 'auth__tab'}
                                onClick={selectActiveRegisterFormHandler}
                            >
                                Register
                            </p>
                        </div>
                    </div>


                    {activeForm === 'loginForm' && (
                        <Login />
                    )}

                    {activeForm === 'registerForm' && (
                        <Register />
                    )}

                </div>
            </div>
        </div>
    )
}

export default AuthPage
