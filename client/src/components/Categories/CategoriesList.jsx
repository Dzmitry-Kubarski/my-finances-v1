import React from 'react';
import { NavLink } from 'react-router-dom';
import useCategories from './useCategories';
import CategoriesItem from './CategoriesItem';

const CategoriesList = () => {

    const { data, isLoading, error } = useCategories()


    if (isLoading) return 'Loading...'

    if (error) return 'Ошибка при получении счетов: ' + error.message

    return (
        <div className='sources'>
            <div className='transaction__title-wrap'>
                <h2 className='transaction__title'>Ваши категории</h2>
                <NavLink className='sources__btn-add' to="/create-category">+</NavLink>
            </div>

            <ul className='sources__list'>
                <CategoriesItem categories={data} />
            </ul>
        </div>
    );
};

export default CategoriesList;