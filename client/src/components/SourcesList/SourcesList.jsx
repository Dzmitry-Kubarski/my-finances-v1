//core
import React from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

//components
import SourceItem from './SourceItem';

//hooks
import useSources from './useSources'

const SourcesList = () => {
    const { data, isLoading, error } = useSources()

    if (isLoading) return 'Loading...'
    if (error) return 'Ошибка при получении счетов: ' + error.message

    const isScroll = data.length > 5

    return (
        <div className='sources'>
            <div className='title-wrap'>
                <h2>Ваши счета</h2>
                <NavLink className='btn-add' to="/create-source">+</NavLink>
            </div>

            <ul className={classnames({ ['sources__list']: true, ['scroll']: isScroll })}>
                <SourceItem sources={data} />
            </ul>
        </div >
    );
};

export default SourcesList;
