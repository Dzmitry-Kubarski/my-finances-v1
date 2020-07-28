import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useHttp } from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'
import { Loader } from '../components/Loader'
import { LinksList } from '../components/LinksList'
import TransactionsList from './../components/TransactionsList';
import SourcesList from './../components/SourcesList';

export const HomePage = () => {
  const [links, setLinks] = useState([])
  const { loading, request } = useHttp()
  const { token } = useContext(AuthContext)

  const [sources, setSources] = useState([])
  const [transactions, setTransactions] = useState([])


  // const fetchLinks = useCallback(async () => {
  //   try {
  //     const fetched = await request('/api/link', 'GET', null, {
  //       Authorization: `Bearer ${token}`
  //     })
  //     setLinks(fetched)
  //   } catch (e) { }
  // }, [token, request])

  // useEffect(() => {
  //   fetchLinks()
  // }, [fetchLinks])

  // if (loading) {
  //   return <Loader />
  // }


  // получаем транзакции
  useEffect(() => {

    const fetchLinks = async () => {
      try {
        const fetched = await request('/api/link', 'GET', null, {
          Authorization: `Bearer ${token}`
        })
        setTransactions(fetched)
      } catch (e) { }
    }

    fetchLinks()

  }, [])


  // получаем счета
  // const fetchSources = useCallback(async () => {
  //   try {
  //     const fetched = await request('/api/sources', 'GET', null, {
  //       Authorization: `Bearer ${token}`
  //     })
  //     // setSources(fetched)
  //     if (!cleanupFunction) setSources(fetched)

  //   } catch (e) { }
  // }, [token, request])

  // useEffect(() => {

  //   fetchSources()
  //   fetchLinks()

  //   
  // }, [])




  return (
    <div className='homePage'>
      {/* {!loading && <LinksList links={links} />} */}

      <TransactionsList transactions={transactions} />
      <SourcesList sources={[]} />
    </div>
  )
}
