import React from 'react';

const Dropdown = ({ items, selectCategory }) => {


    console.log('Dropdown component', items);

    const itemsJsx = items.map((item, index) => (
        <li key={`${item.title}_${index}`} className='new-transaction__popup-item'>
            <button onClick={() => { selectCategory(item.title) }} className='new-transaction__popup-btn'>{item.title}</button>
        </li>))

    return (
        <>
            {itemsJsx}
        </>
    );
};

export default Dropdown;