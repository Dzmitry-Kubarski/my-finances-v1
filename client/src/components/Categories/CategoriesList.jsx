//core
import React from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

//hooks
import useCategories from './useCategories';

//components
import CategoriesItem from './CategoriesItem';


const CategoriesList = () => {
    const { data, isLoading, error } = useCategories()

    if (isLoading) return <p className='loading'>Загрузка...</p>
    if (error) return 'Ошибка при получении счетов: ' + error.message

    const isScroll = data.length > 5
    const isEmpty = data.length === 0

    return (
        <div className='sources'>
            <div className='title-wrap'>
                <h2 className='transaction__title'>Ваши категории</h2>
                <NavLink className='btn-add' to="/create-category">+</NavLink>
            </div>

            {!isEmpty ?
                <ul className={classnames({ 'scroll': isScroll, 'sources__list': true, })}>
                    <CategoriesItem categories={data} />
                </ul>
                :
                <p>Вы ещё не создали ни одной категории</p>
            }
        </div>
    );
};

export default CategoriesList;