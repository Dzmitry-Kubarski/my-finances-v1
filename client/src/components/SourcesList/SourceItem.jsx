// core
import React from 'react';
import { NavLink } from 'react-router-dom';

// hooks
import useDeleteSource from './useDeleteSource';

// images
import sourcesSvg from '../../images/money2.svg';
import arrowBigRightSvg from '../../images/arrow-big-right.svg'


const SourceItem = ({ sources = [] }) => {

    const sourcesJsx = sources && sources.map(({ title, total, _id }) => (
        <li key={_id} className='sources-item'>
            <img className='sources-item__icon' src={sourcesSvg} alt="" />

            <p className='sources-item__title'>{title}</p>

            <div className='sources-item__total'>{total} руб</div>

            <NavLink to={`/sources/${_id}`} className='new-transaction__btn'>
                <img className='new-transaction__icon' src={arrowBigRightSvg} alt='' />
            </NavLink>
        </li>
    ))


    if (!sources) {
        return (
            <p>ничего нет</p>
        )
    }

    return (
        <>
            {sourcesJsx}
        </>
    );
};

export default SourceItem;