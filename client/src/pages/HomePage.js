//core
import React from 'react';

//components
import TransactionsList from '../components/TransactionsList/TransactionsList';
import SourcesList from './../components/SourcesList/SourcesList';


export const HomePage = () => {
    return (
        <div className='page  home-page'>
            <div className='container'>
                <div className='page__inner'>
                    <TransactionsList />
                    <SourcesList />
                </div>
            </div>
        </div>
    )
}
