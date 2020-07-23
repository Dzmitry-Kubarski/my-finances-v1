import React from 'react';
import arrowDownSvg from '../images/arrow-down.png';
import arrowUpSvg from '../images/arrow-up.png';
import cardSvg from '../images/card.svg';

const Transaction = ({ items }) => {

    const transactionsJsx = items.map(({ price, title, expenses, category, sources, date }) => (
        <li key={date} className='transaction-item'>
            <div>
                {expenses ?
                    <img className='transaction-item__arrow' src={arrowDownSvg} alt="" />
                    :
                    <img className='transaction-item__arrow' src={arrowUpSvg} alt="" />
                }
            </div>

            <div className='transaction-item__col'>
                <p className='transaction-item__date'>{date}</p>
                <p className='transaction-item__title'>{title}</p>
            </div>

            <div className='transaction-item__col'>
                {expenses ?
                    <p className='transaction-item__price'>{price}</p>
                    :
                    <p className='transaction-item__price  green'>{price}</p>
                }

                <p className='transaction-item__category'>#{category}</p>
                <p className='transaction-item__sources'>{sources}</p>
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