import React from 'react';
import Transaction from '../components/TransactionsList/Transaction';
import useAllTransactions from './useAllTransactions'
import { Filter } from './../components/Flter/Flter';
import useTransactionsCategory from './useTransactionsCategory';
import { useQuery } from 'react-query'

const AllTransactionsPage = () => {
    const [isOpenFilterList, setIsOpenFilterList] = React.useState(true)

    const [params, setParams] = React.useState({})

    console.log('AllTransactionsPage', params)

    const { data, isLoading, error } = useAllTransactions()
    const { data: filtres, isLoading: isLoadingFiltres, error: errorFiltres } = useTransactionsCategory(params)


    if (isLoading) return 'Loading...'
    if (isLoadingFiltres) return 'Loading Filtres...'

    if (error) return 'Ошибка при получении всех транзакций: ' + error.message
    if (errorFiltres) return 'Ошибка при фильтрации: ' + error.message


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

                <Filter setIsOpenFilterList={setIsOpenFilterList} setParams={setParams} />
            </div>

        </div>
    );
};

export default AllTransactionsPage;