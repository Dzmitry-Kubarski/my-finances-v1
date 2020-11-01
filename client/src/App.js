//core
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useRoutes } from './routes';

//hooks
import { useAuth } from './hooks/auth.hook';

//context
import { AuthContext } from './context/AuthContext';

//components
import { Header } from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
    const { token, login, logout, userId, email } = useAuth();
    const isAuthenticated = !!token;
    const routes = useRoutes(isAuthenticated);

    return (
        <AuthContext.Provider value={{
            token, login, logout, userId, isAuthenticated, email
        }}>

            <BrowserRouter>
                {isAuthenticated && <Header />}

                <div className='app'>
                    {routes}
                </div>

                {isAuthenticated && <Footer />}
            </BrowserRouter>

        </AuthContext.Provider>
    )
}

export default App;
