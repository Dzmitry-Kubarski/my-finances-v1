import React from 'react';
import SourceItem from './SourceItem';
import { NavLink } from 'react-router-dom';
import useSources from './useSources'

const SourcesList = () => {

    const { data, isLoading, error } = useSources()

    if (isLoading) return 'Loading...'

    if (error) return 'Ошибка при получении транзакций: ' + error.message

    return (
        <div className='sources'>
            <div className='transaction__title-wrap'>
                <h2 className='transaction__title'>Ваши счета</h2>
                <NavLink className='sources__btn-add' to="/create-source">+</NavLink>
            </div>

            <ul className='sources__list'>
                <SourceItem sources={data} />
            </ul>
        </div>
    );
};

export default SourcesList;