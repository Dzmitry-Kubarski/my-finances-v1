//core
import React, { useState } from 'react';

//components
import Form from './../components/Form';

//images
import logoSvg from '../images/logo.svg';


export const AuthPage = () => {
    const [activeForm, setActiveForm] = useState('loginForm');

    const [tabs, setTabs] = useState([
        { name: 'Login' },
        { name: 'Register' }
    ])

    const [activeTab, setActiveTab] = useState(0);

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
                                    <p key={`${tab.name}-${index}`}
                                        className={activeTab === index
                                            ? 'auth__tab active'
                                            : 'auth__tab'}
                                        onClick={() => { selectForm(tab.name, index) }}
                                    >
                                        {tab.name}
                                    </p>
                                ))
                            }
                        </div>
                    </div>

                    <Form activeForm={activeForm} />
                </div>
            </div>
        </div>
    )
}
