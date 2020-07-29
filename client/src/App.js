import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from './routes';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';
import { Header } from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
    const { token, login, logout, userId, ready, email } = useAuth();
    const isAuthenticated = !!token;
    const routes = useRoutes(isAuthenticated);

    // if (!ready) {
    //     return <Loader />
    // }

    return (
        <AuthContext.Provider value={{
            token, login, logout, userId, isAuthenticated, email
        }}>
            <Router>
                {isAuthenticated && <Header />}

                <div className='app'>
                    <div className="container">
                        {routes}
                    </div>
                </div>

                <Footer />
            </Router>
        </AuthContext.Provider>
    )
}

export default App;
