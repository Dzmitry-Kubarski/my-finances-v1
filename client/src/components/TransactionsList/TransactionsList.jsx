//core
import React from 'react';
import { NavLink } from 'react-router-dom';

//components
import Transaction from './Transaction';

//hooks
import useTransactions from './useTransactions'


const TransactionsList = () => {
    const { data, isLoading, error } = useTransactions()

    if (isLoading) return 'Loading...'
    if (error) return 'Ошибка при получении транзакций: ' + error.message

    return (
        <div className='transactions'>
            <div className='title-wrap'>
                <h2>Последние транзакции</h2>
                <NavLink className='btn-add' to="/create">+</NavLink>
            </div>

            <ul className='transactions__list'>
                <Transaction transactions={data} />
            </ul>

            <div className="form__row">
                <div className="form__item">
                    <NavLink className='button medium secondary' to="/transactions">Все транзакци</NavLink>
                </div>
            </div>
        </div>
    );
};

export default TransactionsList;


