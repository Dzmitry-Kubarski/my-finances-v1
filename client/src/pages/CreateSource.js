//core
import React from 'react';

//hooks
import { useHttp } from '../hooks/http.hook';

//context
import { AuthContext } from '../context/AuthContext';

//images
import sourcesSvg from '../images/money2.svg';


const CreateSource = () => {
    const auth = React.useContext(AuthContext);
    const { request, } = useHttp();

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
    }

    return (
        <div className='page  create-sources'>
            <div className='container'>
                <div className='title-wrap'>
                    <h2 className='page__title'>Новый счет</h2>
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
        </div>
    );
};

export default CreateSource;