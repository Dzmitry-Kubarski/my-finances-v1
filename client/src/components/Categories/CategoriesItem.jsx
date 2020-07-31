import React from 'react';
import sourcesSvg from '../../images/money2.svg';
import ellipsisHorizontalSvg from '../../images/ellipsis-horizontal.svg'
import tagSvg from '../../images/tag.svg';


const CategoriesItem = ({ categories }) => {

    const categoriesJsx = categories.map(({ title, _id }) => (
        <li key={_id} className='sources-item'>
            <img className='sources-item__icon' src={tagSvg} alt="" />

            <h4 className='sources-item__title'>{title}</h4>

            <button className='new-transaction__btn'>
                <img className='new-transaction__icon' src={ellipsisHorizontalSvg} alt='' />
            </button>
        </li>
    ))

    if (categories.length === 0) {
        return (
            <p>ничего нет</p>
        )
    }

    return (
        <>
            {categoriesJsx}

        </>
    );
};

export default CategoriesItem;