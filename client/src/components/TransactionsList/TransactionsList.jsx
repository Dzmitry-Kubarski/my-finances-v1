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
                <NavLink className='sources__btn-add' to="/create">+</NavLink>
            </div>

            <ul className='transaction__list'>
                <Transaction transactions={data} />
            </ul>

            <div className="form-row">
                <div className="form-item">
                    <NavLink className='button medium secondary' to="/transactions">Все транзакци</NavLink>
                </div>
            </div>
        </div>
    );
};

export default TransactionsList;


