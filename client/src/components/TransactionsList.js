import React from 'react';
import Transaction from './Transaction';

const TransactionsList = ({ items }) => {
    return (
        <div className='transaction-wrap'>
            <h2 className='transaction__title'>Последние транзакции</h2>

            <ul className='table-body same-color-rows'>
                <Transaction items={items} />
            </ul>
        </div>
    );
};

export default TransactionsList;