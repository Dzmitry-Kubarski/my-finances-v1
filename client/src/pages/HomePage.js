import React from 'react'
import TransactionsList from '../components/TransactionsList/TransactionsList';
import SourcesList from './../components/SourcesList/SourcesList';

export const HomePage = () => {
  return (
    <div className='homePage'>
      <TransactionsList />
      {/* <SourcesList /> */}
    </div>
  )
}
