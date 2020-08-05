//core
import React from 'react';

//images
import sourcesSvg from '../../images/money2.svg';
import ellipsisHorizontalSvg from '../../images/ellipsis-horizontal.svg'


const SourceItem = ({ sources }) => {
    const sourcesJsx = sources && sources.map(({ title, total, _id }) => (
        <li key={_id} className='sources-item'>
            <img className='sources-item__icon' src={sourcesSvg} alt="" />

            <h4 className='sources-item__title'>{title}</h4>

            <div className='sources-item__total'>{total} руб</div>

            <button className='new-transaction__btn'>
                <img className='new-transaction__icon' src={ellipsisHorizontalSvg} alt='' />
            </button>
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