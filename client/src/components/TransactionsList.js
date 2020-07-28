import React from 'react';
import Transaction from './Transaction';

const TransactionsList = ({ transactions }) => {
    return (
        <div className='transaction-wrap'>
            <div className='transaction__title-wrap'>
                <h2 className='transaction__title'>Последние транзакции</h2>
                <button className='sources__btn-add' type='button'>+</button>
            </div>

            {/* <h2 className='transaction__title'>Последние транзакции</h2> */}

            <ul className='transaction__list'>
                <Transaction transactions={transactions} />
            </ul>
        </div>
    );
};

export default TransactionsList;