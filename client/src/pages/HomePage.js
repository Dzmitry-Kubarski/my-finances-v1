import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useHttp } from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'
import TransactionsList from '../components/TransactionsList/TransactionsList';
import SourcesList from './../components/SourcesList/SourcesList';

export const HomePage = () => {
  const [links, setLinks] = useState([])
  const { loading, request } = useHttp()
  const { token } = useContext(AuthContext)

  const [sources, setSources] = useState([])
  const [transactions, setTransactions] = useState([])


  return (
    <div className='homePage'>
      <TransactionsList />
      <SourcesList />
    </div>
  )
}
