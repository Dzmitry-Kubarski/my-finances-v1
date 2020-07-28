import React from 'react';
import { useHttp } from '../hooks/http.hook';
import { AuthContext } from '../context/AuthContext';
import { useHistory } from 'react-router-dom';

import sourcesSvg from '../images/money2.svg';


const CreateSource = () => {
    const auth = React.useContext(AuthContext);
    const { loading, request, error, clearError } = useHttp();

    const history = useHistory()

    const [form, setForm] = React.useState({
        title: '', total: ''
    })

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    const addSourceHandler = () => {
        const data = request('/api/sources/add', 'POST', { ...form }, {
            Authorization: `Bearer ${auth.token}`
        })
        history.push(`/home/`)
    }

    return (
        <div className='create-sources'>

            <div className='transaction__title-wrap'>
                <h2 className='transaction__title'>Новый счет</h2>
                <img className='sources-item__icon' src={sourcesSvg} alt="" />
            </div>

            <div className='new-transaction'>
                <div className='new-transaction__row'>
                    <div className='new-transaction__col'>
                        <input onChange={changeHandler} type='text' placeholder='Название счёта' name='title' />
                        <input onChange={changeHandler} type='text' placeholder='Стартовая сумма на счету' name='total' />
                        <button onClick={addSourceHandler} className='new-transaction__submit' type='button'>Подтвердить</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateSource;