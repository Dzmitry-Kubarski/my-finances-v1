//core
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

//context
import { AuthContext } from '../../context/AuthContext';

//image
import logoSvg from '../../images/logo.svg';

// styles
import './Header.scss'


export const Header = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

    return (
        <header className="header">
            <div className='container'>
                <div className='header__inner'>

                    <div className="logo  header__logo">
                        <img className='logo__img' src={logoSvg} alt="logo" />
                        <h1 className="logo__text">Finance</h1>
                    </div>

                    <div className='header__email'>{auth.email}</div>

                    <div className="header__actions">
                        <div className="header__actions-item">
                            <a className='header__logout' href="/" onClick={logoutHandler}>Выйти</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
