//core
import React from 'react';


const Dropdown = ({ items, selectCategory, popup }) => {


    // const itemsJsx = items.map((item, index) => (
    //     <li key={`${item.title}_${index}`} className='new-transaction__popup-item'>
    //         <button onClick={() => { selectCategory(item.title) }} className='new-transaction__popup-btn'>{item.title}</button>
    //     </li>))




    return (
        <>
            {/* {itemsJsx} */}


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