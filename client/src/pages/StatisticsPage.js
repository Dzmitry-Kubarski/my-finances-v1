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
        <div className='page  statisticsPage'>
            <div className='container'>
                <h1 className='page__title'>Статистика</h1>

                <div className='page__inner'>
                    {/* <ExampleChart /> */}
                    <CategoryStatistics data={data} />
                </div>
            </div>
        </div>
    );
};

export default StatisticsPage;