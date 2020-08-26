//core
import React, { useState } from 'react';

// components
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';

//images
import logoSvg from '../../images/logo.svg';

// styles
import './AuthPage.scss'


const AuthPage = () => {
    const [activeForm, setActiveForm] = useState('loginForm');
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { name: 'Login' },
        { name: 'Register' }
    ]

    const selectForm = (name, index) => {
        if (name === 'Login') {
            setActiveForm('loginForm')
            setActiveTab(index)
        }

        else if (name === 'Register') {
            setActiveForm('registerForm');
            setActiveTab(index)
        }
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
                            {
                                tabs.map((tab, index) => (
                                    <p key={tab.name}
                                        className={activeTab === index ? 'auth__tab active' : 'auth__tab'}
                                        onClick={() => { selectForm(tab.name, index) }}
                                    >
                                        {tab.name}
                                    </p>
                                ))
                            }
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
