import React from 'react';
import SourceItem from './SourceItem';
import { useHttp } from '../hooks/http.hook';
import { AuthContext } from '../context/AuthContext';
import { useHistory, NavLink } from 'react-router-dom';




const SourcesList = ({ sources }) => {

    // const sources = [
    //     { title: 'наличные', total: '300' },
    //     { title: 'заначка', total: '200' },
    //     { title: 'карта МТБанка', total: '300' },
    //     { title: 'карта Халва', total: '300' },
    //     { title: 'яндекс деньги', total: '300' },
    // ]

    const auth = React.useContext(AuthContext);
    const { loading, request, error, clearError } = useHttp();

    const history = useHistory()


    const [form, setForm] = React.useState({
        title: '', total: ''
    })

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    const pressHandler = () => {
        const data = request('/api/sources/add', 'POST', { ...form }, {
            Authorization: `Bearer ${auth.token}`
        })
        history.push(`/home/`)
    }


    return (
        <div className='sources'>
            <div className='transaction__title-wrap'>
                <h2 className='transaction__title'>Ваши счета</h2>
                <NavLink className='sources__btn-add' to="/create-source">+</NavLink>

            </div>

            {/* <div>
                <input onChange={changeHandler} type='text' placeholder='название счета' name='title' />
                <input onChange={changeHandler} type='text' placeholder='сумма счета' name='total' />
                <button onClick={pressHandler} type='button'>добавить счет</button>
            </div> */}

            <ul className='sources__list'>
                <SourceItem sources={sources} />
            </ul>
        </div>
    );
};

export default SourcesList;