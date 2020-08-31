// core
import React from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

// components
import SourceItem from './SourceItem';

// images
import noListJPG from '../../images/credit-card.png'

// styles
import './SourcesList.scss'

const SourcesList = ({ data = [] }) => {

    const isScroll = data.length > 5
    const isEmpty = data.length === 0

    return (
        <div className='sources'>
            <div className='title-wrap'>
                <h2>Ваши счета</h2>
                <NavLink className='btn-add' to="/create-source">+</NavLink>
            </div>

            {!isEmpty ?
                <ul className={classnames({ 'sources__list': true, 'scroll': isScroll })}>
                    <SourceItem sources={data} />
                </ul>
                :
                <>
                    <p>Вы не создали ещё ни одного счёта</p>
                    <img className='no-list' src={noListJPG} alt="" />
                </>
            }
        </div >
    );
};

export default SourcesList;
