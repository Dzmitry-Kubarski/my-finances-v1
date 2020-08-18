//core
import React from 'react';
import { NavLink } from 'react-router-dom';

//images
import ellipsisHorizontalSvg from '../../images/ellipsis-horizontal.svg';
import tagSvg from '../../images/tag.svg';
import arrowBigRightSvg from '../../images/arrow-big-right.svg'


const CategoriesItem = ({ categories = [] }) => {
    const categoriesJsx = categories.map(({ title, _id }) => (
        <li key={_id} className='sources-item'>
            <img className='sources-item__icon' src={tagSvg} alt="" />

            <h4 className='sources-item__title'>{title}</h4>

            <NavLink to={`/categories/${_id}`} className='new-transaction__btn'>
                <img className='new-transaction__icon' src={arrowBigRightSvg} alt='' />
            </NavLink>
        </li>
    ))

    return (
        <>
            {categoriesJsx}
        </>
    );
};

export default CategoriesItem;