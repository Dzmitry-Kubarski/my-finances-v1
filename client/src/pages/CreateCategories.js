//core
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom'

//hooks
import { useHttp } from '../hooks/http.hook';

//context
import { AuthContext } from '../context/AuthContext';

//images
import tagSvg from '../images/tag.svg';
import chevronDownSvg from '../images/chevron-down.svg';
import arrowLeftSvg from '../images/arrow-left.svg';


const CreateCategories = () => {
    const history = useHistory()
    const auth = React.useContext(AuthContext);
    const { loading, request, error, clearError } = useHttp();

    const [popupType, setPopupType] = useState(false);
    const [operation, setOperation] = useState('');
    const [title, setTitle] = useState('');

    const newCategory = {
        title,
        operation
    }

    const changeHandler = event => {
        setTitle(event.target.value);
    }

    const addOperationHandler = async () => {
        const data = await request('/api/categories/add', 'POST', { ...newCategory }, {
            Authorization: `Bearer ${auth.token}`
        })
        history.push(`/categories/`)
    }

    const operations = ['расходы', 'доходы'];

    const tooglePopupType = () => {
        setPopupType(!popupType)
    }

    const selectOperations = (name) => {
        setOperation(name)
        setPopupType(!popupType)
    }

    return (
        <div className='page  create-sources'>

            <div className='container'>
                <div className='title-wrap'>
                    <h2>Новая категория</h2>
                    <NavLink className='btn-add' to="/categories">
                        <img className='btn-add__icon' src={arrowLeftSvg} alt="" />
                    </NavLink>
                </div>

                <img className='page__icon' src={tagSvg} alt="" />

                <div className='new-transaction'>
                    <div className='new-transaction__row'>
                        <div className='new-transaction__col'>
                            <input onChange={changeHandler} type='text' placeholder='Название категории' name='title' />

                            <div className='create-sources__row'>
                                <h4 className='new-transaction__title'>Тип операции:</h4>

                                <div className='create-sources__col'>
                                    <span className='new-transaction__value'>{operation}</span>

                                    <button onClick={tooglePopupType} className='new-transaction__btn'>
                                        <img className='new-transaction__icon' src={chevronDownSvg} alt='' />
                                    </button>
                                </div>

                                {popupType && <ul className='new-transaction__popup-list'>

                                    {operations.map((name, index) => (
                                        <li key={`${name}_${index}`} className='new-transaction__popup-item'>
                                            <button onClick={() => { selectOperations(name) }} className='new-transaction__popup-btn'>{name}</button>
                                        </li>
                                    ))}

                                </ul>}
                            </div>

                            <button onClick={addOperationHandler} className='new-transaction__submit' type='button'>Добавить категорию</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateCategories;