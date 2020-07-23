import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useHttp } from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'
import { Loader } from '../components/Loader'
import { LinksList } from '../components/LinksList'
import TransactionsList from './../components/TransactionsList';

export const HomePage = () => {
  const [links, setLinks] = useState([])
  const { loading, request } = useHttp()
  const { token } = useContext(AuthContext)

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


  const items = [
    { price: '-1200', title: 'купил хлеб', expenses: true, category: 'еда', sources: 'наличные', date: '12.07.2020  16:45' },
    { price: -'2400', title: 'тренировка', expenses: true, category: 'спорт', sources: 'заначка', date: '05.03.2020  18:25' },
    { price: -'3800', title: 'хлеб, молоко, кефир, печеньки, яйца, мука, курица, хлебцы', expenses: true, category: 'транспорт', sources: 'наличные', date: '18.01.2020  11:30' },
    { price: '+4500', title: 'зарплата', expenses: false, category: 'еда', sources: 'карта МТБанк', date: '19.02.2020  14:15' },
  ]

  return (
    <>
      {/* {!loading && <LinksList links={links} />} */}

      <TransactionsList items={items} />
    </>
  )
}
