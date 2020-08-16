//core
import React from 'react';

//charts
import ExampleChart from './../charts/ExampleChart';
import StatisticsExpenses from '../charts/StatisticsExpenses';
import StatisticsRevenue from '../charts/StatisticsRevenue';

//hooks
import useStatisticsExpenses from './useStatisticsExpenses';
import useStatisticsRevenue from './useStatisticsRevenue';


const StatisticsPage = () => {
    const { data, isLoading, error } = useStatisticsExpenses()
    const { data: revenue, isLoading: revenueIsLoading, error: errorrEvenue } = useStatisticsRevenue()

    if (isLoading) return 'Loading...'
    if (error) return 'Ошибка при получении всех транзакций: ' + error.message

    console.log(data)

    return (
        <div className='page  statisticsPage'>
            <div className='container'>
                <h1 className='page__title'>Статистика</h1>

                <div className='page__inner'>
                    {/* <ExampleChart /> */}
                    <StatisticsExpenses data={data} />
                    <StatisticsRevenue data={revenue} />
                </div>
            </div>
        </div>
    );
};

export default StatisticsPage;