import React from 'react';
import useTransactionsCategory from './useTransactionsCategory';
import { useHttp } from './../hooks/http.hook';
import { AuthContext } from './../context/AuthContext';



const StatisticsPage = () => {
    const [form, setForm] = React.useState({
        title: ''
    })

    const { data, isLoading, error } = useTransactionsCategory()

    if (isLoading) return 'Loading...'

    if (error) return 'Ошибка при получении транзакций: ' + error.message


    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }


    return (

        <div className='statisticsPage  page'>
            <h1>Статистика</h1>

            <div>
                <input onChange={changeHandler} type='text' />
                <button type='button'>получить по категории</button>
            </div>
        </div>

    );


};

export default StatisticsPage;