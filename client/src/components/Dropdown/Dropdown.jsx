//core
import React from 'react';


const Dropdown = ({ items, popup }) => {
    return (
        <>
            {
                popup && <ul className='new-transaction__popup-list'>

                    {items.map((name, index) => (
                        <li key={`${name}_${index}`} className='new-transaction__popup-item'>
                            <button className='new-transaction__popup-btn'>{name}</button>
                        </li>
                    ))}


                </ul>
            }
        </>
    );
};

export default Dropdown;