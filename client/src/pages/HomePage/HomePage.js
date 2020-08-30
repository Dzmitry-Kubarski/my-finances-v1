//core
import React from 'react';

//components
import TransactionsList from '../../components/TransactionsList/TransactionsList';
import SourcesList from '../../components/SourcesList/SourcesList';

// hooks
import useSources from '../../components/SourcesList/useSources';
import useTransactions from '../../components/TransactionsList/useTransactions';


export const HomePage = () => {
    const { data: sources, isLoading, error } = useSources();
    const { data: transactions, isLoading: isLoadingTransactions, error: errorTransactions } = useTransactions();

    if (isLoadingTransactions || isLoading) return <p className='loading'>Загрузка данных...</p>
    if (errorTransactions) return 'Ошибка при получении транзакций'
    if (error) return 'Ошибка при получении счетов'

    return (
        <div className='page  home-page'>
            <div className='container'>
                <div className='page__inner'>
                    <TransactionsList data={transactions} />
                    <SourcesList data={sources} />
                </div>
            </div>
        </div>
    )
}
