//core
import React from 'react';
import classnames from 'classnames';

//components
import Transaction from '../../components/TransactionsList/Transaction';
import { Filter } from '../../components/Flter/Flter';

//hooks
import useAllTransactions from './useAllTransactions'

//context
import { AuthContext } from '../../context/AuthContext'

// styles
import './AllTransactionsPage.scss'


const AllTransactionsPage = () => {
    const [isOpenFilterList, setIsOpenFilterList] = React.useState(false)
    const [isNotFound, setIsNotFound] = React.useState(false)
    const [filtres, setFiltres] = React.useState([])
    const { data, isLoading, error } = useAllTransactions()
    const { token } = React.useContext(AuthContext);

    const fetchLinks = async (params) => {
        try {

            const entries = Object.entries(params).filter(([key, value]) => value !== '')
            const newParams = Object.fromEntries(entries)

            const paramsUrl = Object.keys(newParams).map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(newParams[key])}`).join('&')

            const response = await fetch('/api/transaction/category/?' + paramsUrl, { headers: { Authorization: `Bearer ${token}` } })

            const data = await response.json()

            if (data.length === 0) {
                setIsNotFound(true)
            } else {
                setFiltres(data)
            }

        } catch (e) {
            throw new Error(e)
        }
    }

    if (isLoading) return <p className='load-statistics'>Загрузка...</p>
    if (error) return 'Ошибка при получении всех транзакций'

    return (
        <div className='page  allTransactionsPage'>
            <div className='container'>
                <div className='page__inner'>
                    <div className='all-transactions'>

                        {!isOpenFilterList
                            ?
                            <ul className={classnames({ ['transactions__list']: true, ['scroll']: data.length > 5 })}>
                                <Transaction transactions={data} />
                            </ul>
                            :
                            <>
                                {!isNotFound
                                    ?
                                    <div>
                                        <ul className={classnames({ ['transactions__list']: true, ['scroll']: filtres.length > 5 })}>
                                            <Transaction transactions={filtres} />
                                        </ul>
                                    </div>
                                    :
                                    <p>Ничего не найдено</p>
                                }
                            </>
                        }
                    </div>


                    <div className='allTransactionsPage__filter-wrap'>
                        <div className="title-wrap">
                            <h2>Фильтр</h2>
                        </div>

                        <Filter setIsOpenFilterList={setIsOpenFilterList} fetchLinks={fetchLinks} setIsNotFound={setIsNotFound} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllTransactionsPage;