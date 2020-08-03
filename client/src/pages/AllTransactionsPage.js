import React from 'react';
import Transaction from '../components/TransactionsList/Transaction';
import useAllTransactions from './useAllTransactions'
import { Filter } from './../components/Flter/Flter';
import { AuthContext } from '../../src/context/AuthContext'
import axios from 'axios'


const AllTransactionsPage = () => {
    const [isOpenFilterList, setIsOpenFilterList] = React.useState(false)
    const [filtres, setFiltres] = React.useState([])
    const { data, isLoading, error } = useAllTransactions()
    const { token, logout } = React.useContext(AuthContext);

    const fetchLinks = async (params) => {
        try {

            const entries = Object.entries(params).filter(([key, value]) => value !== '')
            const newParams = Object.fromEntries(entries)

            const paramsUrl = Object.keys(newParams).map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(newParams[key])}`).join('&')

            const response = await axios.get('/api/link/category/?' + paramsUrl, { headers: { Authorization: `Bearer ${token}` } })

            const data = await response.data

            setFiltres(data)

        } catch (e) {

            throw new Error(e)
        }
    }

    if (isLoading) return 'Loading...'
    if (error) return 'Ошибка при получении всех транзакций: ' + error.message

    return (
        <div className='allTransactionsPage'>

            <div className='all-transactions'>
                <div className='transaction__title-wrap'>
                    <h2 className='transaction__title'>Все транзакции</h2>
                </div>

                {!isOpenFilterList
                    ?
                    <ul className='transaction__list'>
                        <Transaction transactions={data} />
                    </ul>
                    :
                    <div>
                        <h2>Отфильтрованный список</h2>

                        <ul className='transaction__list'>
                            <Transaction transactions={filtres} />
                        </ul>
                    </div>
                }
            </div>


            <div className='allTransactionsPage__filter-wrap'>
                <div className="transaction__title-wrap">
                    <h2 className="transaction__title">Фильтры</h2>
                </div>

                <Filter setIsOpenFilterList={setIsOpenFilterList} fetchLinks={fetchLinks} />
            </div>

        </div>
    );
};

export default AllTransactionsPage;