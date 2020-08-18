//core
import React, { useContext, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

//hooks
import { useHttp } from '../hooks/http.hook';

//context
import { AuthContext } from '../context/AuthContext';

//components
import useCategories from '../components/Categories/useCategories';
import useSources from './../components/SourcesList/useSources';

//images
import chevronDownSvg from '../images/chevron-down.svg';
import penSvg from '../images/pen.svg';
import arrowLeftSvg from '../images/arrow-left.svg';


export const CreatePage = () => {
    const auth = useContext(AuthContext)
    const { request, error } = useHttp()
    const history = useHistory()

    const [popupType, setPopupType] = useState(false);
    const [popupSources, setPopupSources] = useState(false);
    const [popupCategory, setPopupCategory] = useState(false);
    const [editDateModal, setEditDateModal] = useState(false);

    const [operation, setOperation] = useState('');
    const [source, setSource] = useState('');
    const [sum, setSum] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState(new Date().toLocaleDateString());
    const [comment, setComment] = useState('');
    const [errorForm, setErrorForm] = useState(false);

    const { data: categories, isLoading, error: errorCategories } = useCategories();
    const { data: sources, isLoading: sourcesLoading, error: errorSources } = useSources();

    const operations = ['расходы', 'доходы', 'перевод между счетами'];

    const newTransaction = {
        operation,
        source,
        sum,
        category,
        date,
        comment,
    }

    const isEmptyFields = Object.entries(newTransaction).filter(([key, value]) => value === '')

    const createTransactionHandler = async () => {
        if (isEmptyFields.length > 0) {
            return setErrorForm(true)
        }

        const data = await request('/api/link/add', 'POST', { ...newTransaction }, {
            Authorization: `Bearer ${auth.token}`
        })


        const data2 = await request('/api/sources/edit-total', 'POST', { ...newTransaction }, {
            Authorization: `Bearer ${auth.token}`
        })

        history.push(`/home/`)
    }

    const tooglePopupType = () => {
        setPopupType(!popupType)
    }

    const tooglePopupSources = () => {
        setPopupSources(!popupSources)
    }

    const tooglePopupCategory = () => {
        setPopupCategory(!popupCategory)
    }

    const selectPperations = (name) => {
        setOperation(name)
        setPopupType(!popupType)
        setErrorForm(false)
    }

    const selectSources = (name) => {
        setSource(name)
        setPopupSources(!popupSources)
        setErrorForm(false)
    }

    const selectCategory = (title) => {
        setCategory(title)
        setPopupCategory(!popupCategory)
        setErrorForm(false)
    }

    const sumChangeHadler = (event) => {
        setSum(event.target.value)
    }

    const commentChangeHadler = (event) => {
        setComment(event.target.value)
    }

    const toogleEditDateModal = () => {
        setEditDateModal(!editDateModal)
    }

    const changeDateHandler = event => {
        setDate(event.target.value);
    }

    if (isLoading) return 'Loading...'
    if (sourcesLoading) return 'Loading...'

    if (errorCategories) return 'Ошибка при получении счетов'
    if (errorSources) return 'Ошибка при получении счетов'


    return (
        <div className='page  createPage'>

            <div className='container'>
                <div className='title-wrap'>
                    <h2>Новая транзакция</h2>
                    <NavLink className='btn-add' to="/home">
                        <img className='btn-add__icon' src={arrowLeftSvg} alt="" />
                    </NavLink>
                </div>

                {errorForm && <p className='error'>Заполните все поля</p>}

                <div className='new-transaction'>
                    <div className='new-transaction__row'>
                        <h4 className='new-transaction__title'>Тип операции:</h4>

                        <div className='new-transaction__col'>
                            <span className='new-transaction__value'>{operation}</span>

                            <button onClick={tooglePopupType} className='new-transaction__btn'>
                                <img className='new-transaction__icon' src={chevronDownSvg} alt='' />
                            </button>
                        </div>

                        {popupType && <ul className='new-transaction__popup-list'>

                            {operations.map((name, index) => (
                                <li key={`${name}_${index}`} className='new-transaction__popup-item'>
                                    <button onClick={() => { selectPperations(name) }} className='new-transaction__popup-btn'>{name}</button>
                                </li>
                            ))}

                        </ul>}
                    </div>

                    <div className='new-transaction__row'>
                        <h4 className='new-transaction__title'>Счёт:</h4>

                        <div className='new-transaction__col'>
                            <span className='new-transaction__value'>{source}</span>

                            <button onClick={tooglePopupSources} className='new-transaction__btn'>
                                <img className='new-transaction__icon' src={chevronDownSvg} alt='' />
                            </button>
                        </div>

                        {popupSources &&
                            <ul className='new-transaction__popup-list'>
                                {sources.length === 0
                                    ? <li className='new-transaction__popup-item'>
                                        <NavLink to='create-source' exact className='new-transaction__popup-btn'>Создать</NavLink>
                                    </li>

                                    : sources.map(({ title }, index) => (
                                        <li key={`${title}_${index}`} className='new-transaction__popup-item'>
                                            <button onClick={() => { selectSources(title) }} className='new-transaction__popup-btn'>{title}</button>
                                        </li>
                                    ))}
                            </ul>
                        }
                    </div>

                    <div className='new-transaction__row'>
                        <h4 className='new-transaction__title'>Категория:</h4>

                        <div className='new-transaction__col'>
                            <span className='new-transaction__value'>{category}</span>
                            <button onClick={tooglePopupCategory} className='new-transaction__btn'>
                                <img className='new-transaction__icon' src={chevronDownSvg} alt='' />
                            </button>
                        </div>

                        {popupCategory &&
                            <ul className='new-transaction__popup-list'>
                                {categories.length === 0
                                    ? <li className='new-transaction__popup-item'>
                                        <NavLink to='create-category' exact className='new-transaction__popup-btn'>Создать</NavLink>
                                    </li>

                                    : categories.map((item, index) => (
                                        <li key={`${item.title}_${index}`} className='new-transaction__popup-item'>
                                            <button onClick={() => { selectCategory(item.title) }} className='new-transaction__popup-btn'>{item.title}</button>
                                        </li>
                                    ))}
                            </ul>
                        }
                    </div>


                    <div className='new-transaction__row'>
                        <h4 className='new-transaction__title'>Дата:</h4>
                        <div className='new-transaction__col'>

                            {!editDateModal
                                ? <span className='new-transaction__value'>{date} </span>
                                : <input type='text' placeholder={date} value={date} onChange={changeDateHandler} />
                            }

                            {!editDateModal
                                ?
                                <button onClick={toogleEditDateModal} className='new-transaction__btn'>
                                    <img className='new-transaction__icon' src={penSvg} alt='' />
                                </button>
                                :
                                <button onClick={toogleEditDateModal} className='new-transaction__btn'>
                                    ok
                            </button>
                            }
                        </div>
                    </div>


                    <div className='new-transaction__row'>
                        <h4 className='new-transaction__title'>Комментарий</h4>
                        <textarea onChange={commentChangeHadler} placeholder='Описание' value={comment} />
                    </div>


                    <div className='new-transaction__row'>
                        <h4 className='new-transaction__title'>Сумма:</h4>
                        <div className='new-transaction__col'>
                            <input onChange={sumChangeHadler} type='number' placeholder='сумма' value={sum} />
                            <button onClick={createTransactionHandler} className='new-transaction__submit' type='button'>Подтвердить</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
