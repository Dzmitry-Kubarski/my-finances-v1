//core
import React from 'react';
import { NavLink } from 'react-router-dom';

//hooks
import useCategories from './useCategories';

//components
import CategoriesItem from './CategoriesItem';


const CategoriesList = () => {
    const { data, isLoading, error } = useCategories()

    if (isLoading) return 'Loading...'
    if (error) return 'Ошибка при получении счетов: ' + error.message

    return (
        <div className='sources'>
            <div className='title-wrap'>
                <h2 className='transaction__title'>Ваши категории</h2>
                <NavLink className='btn-add' to="/create-category">+</NavLink>
            </div>

            <ul className='sources__list'>
                <CategoriesItem categories={data} />
            </ul>
        </div>
    );
};

export default CategoriesList;