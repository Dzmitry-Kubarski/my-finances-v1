//core
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from './routes';

//hooks
import { useAuth } from './hooks/auth.hook';

//context
import { AuthContext } from './context/AuthContext';

//components
import { Header } from './components/Header/Header';
import Footer from './components/Footer/Footer';

//ReactQueryDevtools
// import { ReactQueryDevtools } from 'react-query-devtools'
import { ReactQueryConfigProvider } from 'react-query';
const queryConfig = { queries: { refetchOnWindowFocus: false } };


function App() {
    const { token, login, logout, userId, email } = useAuth();
    const isAuthenticated = !!token;
    const routes = useRoutes(isAuthenticated);

    return (
        <ReactQueryConfigProvider config={queryConfig}>
            <AuthContext.Provider value={{
                token, login, logout, userId, isAuthenticated, email
            }}>

                <Router>
                    {isAuthenticated && <Header />}

                    <div className='app'>
                        {/* <div className="container">
                            
                        </div> */}
                        {routes}
                    </div>

                    {isAuthenticated && <Footer />}
                </Router>

                {/* <ReactQueryDevtools initialIsOpen={false} /> */}
            </AuthContext.Provider>
        </ReactQueryConfigProvider>
    )
}

export default App;
