//core
import React, { useState } from 'react';

//hooks
import { useHttp } from '../hooks/http.hook';

//context
import { AuthContext } from '../context/AuthContext';

//images
import tagSvg from '../images/tag.svg';
import chevronDownSvg from '../images/chevron-down.svg';


const CreateCategories = () => {
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

    const addOperationHandler = () => {
        const data = request('/api/categories/add', 'POST', { ...newCategory }, {
            Authorization: `Bearer ${auth.token}`
        })
    }

    const operations = ['расходы', 'доходы'];

    const tooglePopupType = () => {
        setPopupType(!popupType)
    }

    const selectOperations = (name) => {
        setOperation(name)
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
    );
};

export default CreateCategories;