//core
import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

//hooks
import { useHttp } from '../hooks/http.hook';

//context
import { AuthContext } from '../context/AuthContext';

//images
import sourcesSvg from '../images/money2.svg';
import arrowLeftSvg from '../images/arrow-left.svg';


const CreateSource = () => {
    const history = useHistory()

    const auth = React.useContext(AuthContext);
    const { request, } = useHttp();

    const [form, setForm] = React.useState({
        title: '', total: ''
    })

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    const addSourceHandler = async () => {
        const data = await request('/api/sources/add', 'POST', { ...form }, {
            Authorization: `Bearer ${auth.token}`
        })
        history.push(`/home/`)
    }

    return (
        <div className='page  create-sources'>
            <div className='container'>
                <div className='title-wrap'>
                    <h2>Новый счет</h2>
                    <NavLink className='btn-add' to="/home">
                        <img className='btn-add__icon' src={arrowLeftSvg} alt="" />
                    </NavLink>
                </div>

                <img className='page__icon' src={sourcesSvg} alt="" />

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