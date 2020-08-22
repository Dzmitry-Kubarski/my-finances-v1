// core
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// pages
import { HomePage } from './pages/HomePage/HomePage'
import { CreateTransactionPage } from './pages/CreateTransactionPage/CreateTransactionPage'
import AuthPage from './pages/AuthPage/AuthPage'
import CreateSource from './pages/CreateSource/CreateSource';
import CategoriesPage from './pages/CategoriesPage/CategoriesPage';
import CreateCategories from './pages/CreateCategories/CreateCategories';
import StatisticsPage from './pages/StatisticsPage/StatisticsPage';
import AllTransactionsPage from './pages/AllTransactionsPage/AllTransactionsPage';
import DetailSourcePage from './pages/DetailSourcePage/DetailSourcePage';
import DetailCategoriesPage from './pages/DetailCategoriesPage/DetailCategoriesPage';


export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/home" exact>
                    <HomePage />
                </Route>

                <Route path="/create">
                    <CreateTransactionPage />
                </Route>

                <Route path="/create-source">
                    <CreateSource />
                </Route>

                <Route path="/create-category">
                    <CreateCategories />
                </Route>

                <Route path="/statistics">
                    <StatisticsPage />
                </Route>

                <Route path="/transactions">
                    <AllTransactionsPage />
                </Route>

                <Route path="/categories" exact>
                    <CategoriesPage />
                </Route>

                <Route path="/sources/:id">
                    <DetailSourcePage />
                </Route>

                <Route path="/categories/:id" exact>
                    <DetailCategoriesPage />
                </Route>

                <Redirect to="/home" />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage />
            </Route>

            <Redirect to="/" />
        </Switch>
    )
}
