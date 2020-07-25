import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from './routes';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';
import { Loader } from './components/Loader';
import { Header } from './components/Header';
import Footer from './components/Footer';

function App() {
    const { token, login, logout, userId, ready, email } = useAuth();
    const isAuthenticated = !!token;
    const routes = useRoutes(isAuthenticated);

    console.log('app-email', email)

    if (!ready) {
        return <Loader />
    }

    return (
        <AuthContext.Provider value={{
            token, login, logout, userId, isAuthenticated, email
        }}>
            <Router>
                {isAuthenticated && <Header />}

                <div className="container">
                    {routes}
                </div>

                <Footer />
            </Router>
        </AuthContext.Provider>
    )
}

export default App;
