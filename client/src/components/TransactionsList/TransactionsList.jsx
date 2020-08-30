// core
import React from 'react';
import { NavLink } from 'react-router-dom';

// components
import Transaction from './Transaction';



// images
import noListGPG from '../../images/no-transactions.png';

// styles
import './TransactionsList.scss'

const TransactionsList = ({ data }) => {


    const isEmpty = data.length === 0

    return (
        <div className='transactions'>
            <div className='title-wrap'>
                <h2>Последние транзакции</h2>
                <NavLink className='btn-add' to="/create">+</NavLink>
            </div>

            {!isEmpty ?
                <>
                    <ul className='transactions__list'>
                        <Transaction transactions={data} />
                    </ul>

                    <div className="form__row">
                        <div className="form__item">
                            <NavLink className='button medium secondary' to="/transactions">Все транзакци</NavLink>
                        </div>
                    </div>
                </>
                :
                <>
                    <p>Вы не провели ещё ни одной транзакции</p>
                    <img className='no-list' src={noListGPG} alt="" />
                </>
            }

        </div>
    );
};

export default TransactionsList;


