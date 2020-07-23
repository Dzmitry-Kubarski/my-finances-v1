import React, { useState } from 'react';
import Form from './../components/Form';

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
        <div className="landing">
            <div className='landing-decoration'></div>

            <div className="landing-info">
                <div className="logo">
                    <img src="" alt="" />
                </div>

                <h2 className="landing-info-pretitle">Welcome to</h2>
                <h1 className="landing-info-title">Finance</h1>

                <p className="landing-info-text">
                    Данное приложение поможет вам вести учёт расходов и доходов
                </p>

                <div className="tab-switch">

                    {
                        tabs.map((tab, index) => (
                            <p key='tab.name'
                                className={activeTab === index
                                    ? 'tab-switch-button login-register-form-trigger active'
                                    : 'tab-switch-button login-register-form-trigger'}
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
    )
}
