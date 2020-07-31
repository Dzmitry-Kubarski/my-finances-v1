import React from 'react';
import { useHttp } from '../hooks/http.hook';
import { AuthContext } from '../context/AuthContext';
import { useHistory } from 'react-router-dom';

import tagSvg from '../images/tag.svg';


const CreateCategories = () => {
    const auth = React.useContext(AuthContext);
    const { loading, request, error, clearError } = useHttp();

    const history = useHistory()

    const [form, setForm] = React.useState({
        title: ''
    })

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    const addSourceHandler = () => {
        const data = request('/api/categories/add', 'POST', { ...form }, {
            Authorization: `Bearer ${auth.token}`
        })
    }

    return (
        <div className='create-sources'>

            <div className='transaction__title-wrap'>
                <h2 className='transaction__title'>Новая категория</h2>
                <img className='sources-item__icon' src={tagSvg} alt="" />
            </div>

            <div className='new-transaction'>
                <div className='new-transaction__row'>
                    <div className='new-transaction__col'>
                        <input onChange={changeHandler} type='text' placeholder='Название категории' name='title' />
                        <button onClick={addSourceHandler} className='new-transaction__submit' type='button'>Добавить категорию</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateCategories;