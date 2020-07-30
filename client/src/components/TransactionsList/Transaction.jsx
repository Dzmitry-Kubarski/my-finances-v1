import React from 'react';
import arrowDownSvg from '../../images/arrow-down.png';
import arrowUpSvg from '../../images/arrow-up.png';
import cardSvg from '../../images/card.svg';

const Transaction = ({ transactions = [] }) => {

    const transactionsJsx = transactions.map(({ sum, comment, operation, category, source, date, _id }) => (
        <li key={_id} className='transaction-item'>
            <div>
                {operation === 'расходы' ?
                    <img className='transaction-item__arrow' src={arrowDownSvg} alt="" />
                    :
                    <img className='transaction-item__arrow' src={arrowUpSvg} alt="" />
                }
            </div>

            <div className='transaction-item__col'>
                <p className='transaction-item__date'>{date}</p>
                <p className='transaction-item__title'>{comment}</p>
            </div>
            <div className='transaction-item__col'>
                {operation === 'расходы' ?
                    <p className='transaction-item__price'>-{sum}</p>
                    :
                    <p className='transaction-item__price  green'>+{sum}</p>
                }

                <p className='transaction-item__category'>#{category}</p>
                <p className='transaction-item__sources'>{source}</p>
            </div>
        </li>
    ))



    return (
        <>
            {transactionsJsx}
        </>
    );
};

export default Transaction;