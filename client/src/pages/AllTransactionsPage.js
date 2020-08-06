//core
import React from 'react';
import axios from 'axios';

//components
import Transaction from '../components/TransactionsList/Transaction';
import { Filter } from './../components/Flter/Flter';

//hooks
import useAllTransactions from './useAllTransactions'

//context
import { AuthContext } from '../../src/context/AuthContext'


const AllTransactionsPage = () => {
    const [isOpenFilterList, setIsOpenFilterList] = React.useState(false)
    const [filtres, setFiltres] = React.useState([])
    const { data, isLoading, error } = useAllTransactions()
    const { token } = React.useContext(AuthContext);

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
        <div className='page  allTransactionsPage'>
            <div className='container'>
                <div className='page__inner'>
                    <div className='all-transactions'>
                        <div className='title-wrap'>
                            <h2>Все транзакции</h2>
                        </div>

                        {!isOpenFilterList
                            ?
                            <ul className='transactions__list'>
                                <Transaction transactions={data} />
                            </ul>
                            :
                            <div>
                                <h2>Отфильтрованный список</h2>

                                <ul className='transactions__list'>
                                    <Transaction transactions={filtres} />
                                </ul>
                            </div>
                        }
                    </div>


                    <div className='allTransactionsPage__filter-wrap'>
                        <div className="title-wrap">
                            <h2>Фильтры</h2>
                        </div>

                        <Filter setIsOpenFilterList={setIsOpenFilterList} fetchLinks={fetchLinks} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllTransactionsPage;