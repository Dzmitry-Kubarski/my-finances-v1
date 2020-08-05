//core
import React from 'react';

//charts
import ExampleChart from './../charts/ExampleChart';
import CategoryStatistics from './../charts/CategoryStatistics';

//hooks
import useStatistics from './useStatistics';


const StatisticsPage = () => {
    const { data, isLoading, error } = useStatistics()

    if (isLoading) return 'Loading...'
    if (error) return 'Ошибка при получении всех транзакций: ' + error.message

    return (
        <div className='statisticsPage  page'>
            <h1>Статистика</h1>

            {/* <ExampleChart /> */}
            <CategoryStatistics data={data} />
        </div>
    );
};

export default StatisticsPage;