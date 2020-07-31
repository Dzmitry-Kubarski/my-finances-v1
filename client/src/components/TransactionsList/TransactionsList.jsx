import React from 'react';
import Transaction from './Transaction';
import useTransactions from './useTransactions'
import { NavLink } from 'react-router-dom';

const TransactionsList = () => {

    const { data, isLoading, error } = useTransactions()

    if (isLoading) return 'Loading...'

    if (error) return 'Ошибка при получении транзакций: ' + error.message

    return (
        <div className='transaction-wrap'>
            <div className='transaction__title-wrap'>
                <h2 className='transaction__title'>Последние транзакции</h2>
                {/* <button className='sources__btn-add' type='button'>+</button> */}
                <NavLink className='sources__btn-add' to="/create">+</NavLink>
            </div>

            <ul className='transaction__list'>
                <Transaction transactions={data} />
            </ul>
        </div>
    );
};

export default TransactionsList;