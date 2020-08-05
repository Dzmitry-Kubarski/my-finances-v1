import React, { useContext, useState } from 'react';
import { useHttp } from '../hooks/http.hook';
import { AuthContext } from '../context/AuthContext';
import { useHistory } from 'react-router-dom';

import chevronDownSvg from '../images/chevron-down.svg'
import penSvg from '../images/pen.svg'
import useCategories from '../components/Categories/useCategories';
import useSources from './../components/SourcesList/useSources';


//date picker
import DatePicker, { registerLocale } from "react-datepicker";
import ru from "date-fns/locale/ru"; // the locale you want
registerLocale("ru", ru); // register it with the name you want


export const CreatePage = () => {
    const [popupType, setPopupType] = useState(false);
    const [popupSources, setPopupSources] = useState(false);
    const [popupCategory, setPopupCategory] = useState(false);
    const [editDateModal, setEditDateModal] = useState(false);

    const [operation, setOperation] = useState('');
    const [source, setSource] = useState('');
    const [sum, setSum] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState(
        // new Date().toLocaleString('ru', {
        //     year: 'numeric',
        //     month: 'long',
        //     day: 'numeric',
        //     // hour: 'numeric',
        //     // minute: 'numeric'
        // })
        new Date().toLocaleDateString()
    );
    const [comment, setComment] = useState(' ');

    const newTransaction = {
        operation,
        source,
        sum,
        category,
        date,
        comment,
    }


    //data picker
    // const [startDate, setStartDate] = useState(new Date());

    const auth = useContext(AuthContext)
    const { request, error } = useHttp()
    const history = useHistory()

    const createTransactionHandler = () => {
        const data = request('/api/link/add', 'POST', { ...newTransaction }, {
            Authorization: `Bearer ${auth.token}`
        })
    }


    //hooks
    const { data: categories, isLoading, error: errorCategories } = useCategories()
    const { data: sources, isLoading: sourcesLoading, error: errorSources } = useSources()


    if (isLoading) return 'Loading...'
    if (sourcesLoading) return 'Loading...'

    if (errorCategories) return 'Ошибка при получении счетов: ' + errorCategories.message
    if (errorSources) return 'Ошибка при получении счетов: ' + errorSources.message



    const tooglePopupType = () => {
        setPopupType(!popupType)
    }

    const tooglePopupSources = () => {
        setPopupSources(!popupSources)
    }

    const tooglePopupCategory = () => {
        setPopupCategory(!popupCategory)
    }

    const operations = ['расходы', 'доходы', 'перевод между счетами'];
    const selectPperations = (name) => {
        setOperation(name)
        setPopupType(!popupType)
    }

    const selectSources = (name) => {
        setSource(name)
        setPopupSources(!popupSources)
    }

    const selectCategory = (title) => {
        setCategory(title)
        setPopupCategory(!popupCategory)
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


    return (
        <div className='createPage'>
            <h2 className='createPage__title'>Новая транзакция</h2>

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

                    {popupSources && <ul className='new-transaction__popup-list'>

                        {sources.map(({ title }, index) => (
                            <li key={`${title}_${index}`} className='new-transaction__popup-item'>
                                <button onClick={() => { selectSources(title) }} className='new-transaction__popup-btn'>{title}</button>
                            </li>
                        ))}

                    </ul>}
                </div>

                <div className='new-transaction__row'>
                    <h4 className='new-transaction__title'>Категория:</h4>

                    <div className='new-transaction__col'>
                        <span className='new-transaction__value'>{category}</span>
                        <button onClick={tooglePopupCategory} className='new-transaction__btn'>
                            <img className='new-transaction__icon' src={chevronDownSvg} alt='' />
                        </button>
                    </div>

                    {popupCategory && <ul className='new-transaction__popup-list'>

                        {categories.map((item, index) => (
                            <li key={`${item.title}_${index}`} className='new-transaction__popup-item'>
                                <button onClick={() => { selectCategory(item.title) }} className='new-transaction__popup-btn'>{item.title}</button>
                            </li>
                        ))}
                    </ul>}
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
                                {/* <img className='new-transaction__icon' src={penSvg} alt='' /> */}
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
                        <input onChange={sumChangeHadler} type='text' placeholder='сумма' value={sum} />
                        <button onClick={createTransactionHandler} className='new-transaction__submit' type='button'>Подтвердить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
