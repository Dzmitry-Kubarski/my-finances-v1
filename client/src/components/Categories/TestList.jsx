import React from 'react';
import { NavLink } from 'react-router-dom';
import useTest from './useTest';
import CategoriesItem from './CategoriesItem';
import TestItem from './TestItem';

import useCategories from './useCategories';


const TestList = () => {

    // const { data, isLoading, error } = useTest()
    const { data, isLoading, error } = useCategories()

    if (isLoading) return 'Loading...'

    if (error) return 'Ошибка при получении счетов: ' + error.message

    return (
        <div className='sources'>
            <div className='transaction__title-wrap'>
                <h2 className='transaction__title'>Ваши категории из хеша</h2>
                <NavLink className='sources__btn-add' to="/create-category">+</NavLink>
            </div>

            <ul className='sources__list'>
                <TestItem categories={data} />
            </ul>
        </div>
    );
};

export default TestList;