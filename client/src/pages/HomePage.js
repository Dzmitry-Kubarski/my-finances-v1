//core
import React from 'react';

//components
import TransactionsList from '../components/TransactionsList/TransactionsList';
import SourcesList from './../components/SourcesList/SourcesList';


export const HomePage = () => {
  return (
    <div className='homePage'>
      <TransactionsList />
      <SourcesList />
    </div>
  )
}
