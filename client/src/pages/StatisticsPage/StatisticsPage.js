//core
import React from 'react';

//charts
import StatisticsExpenses from '../../charts/StatisticsExpenses';
import StatisticsRevenue from '../../charts/StatisticsRevenue';

//hooks
import useStatisticsExpenses from './useStatisticsExpenses';
import useStatisticsRevenue from './useStatisticsRevenue';

// styles
import './StatisticsPage.scss'


const StatisticsPage = () => {
    const { data, isLoading, error } = useStatisticsExpenses()
    const { data: revenue, isLoading: revenueIsLoading, error: errorrEvenue } = useStatisticsRevenue()

    if (isLoading) return <p className='load-statistics'>Загрузка...</p>
    if (error) return 'Ошибка при получении данных'

    if (revenueIsLoading) return <p className='load-statistics'>Загрузка...</p>
    if (errorrEvenue) return 'Ошибка при получении данных'

    const isEmptyExpenses = data.length === 0
    const isEmptyRevenue = revenue.length === 0

    return (
        <div className='page  statisticsPage'>
            <div className='container'>
                <h1 className='page__title'>Статистика</h1>

                <div className='page__inner'>
                    {!isEmptyExpenses ? <StatisticsExpenses data={data} /> : <p>Ещё нет данных о расходах</p>}
                    {!isEmptyRevenue ? <StatisticsRevenue data={revenue} /> : <p>Ещё нет данных о доходах</p>}
                </div>
            </div>
        </div>
    );
};

export default StatisticsPage;