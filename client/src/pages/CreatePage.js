import React, { useContext, useEffect, useState } from 'react';
import { useHttp } from '../hooks/http.hook';
import { AuthContext } from '../context/AuthContext';
import { useHistory } from 'react-router-dom';

import ellipsisHorizontalSvg from '../images/ellipsis-horizontal.svg'
import appsSvg from '../images/apps.svg'
import plusSvg from '../images/plus.svg'
import chevronDownSvg from '../images/chevron-down.svg'
import penSvg from '../images/pen.svg'

export const CreatePage = () => {
    const [popupType, setPopupType] = useState(false);
    const [popupSources, setPopupSources] = useState(false);
    const [popupCategory, setPopupCategory] = useState(false);

    const [operation, setOperation] = useState('');
    const [source, setSource] = useState('');
    const [sum, setSum] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('23.07.2020');
    const [comment, setComment] = useState(' ');

    const newTransaction = {
        operation,
        source,
        sum,
        category,
        date,
        comment,
    }

    // const history = useHistory()
    const auth = useContext(AuthContext)
    const { request } = useHttp()
    // const [link, setLink] = useState('')

    // useEffect(() => {
    //   window.M.updateTextFields()
    // }, [])

    // const pressHandler = async event => {
    //     if (event.key === 'Enter') {
    //         try {
    //             const data = await request('/api/link/generate', 'POST', { from: link }, {
    //                 Authorization: `Bearer ${auth.token}`
    //             })
    //             history.push(`/detail/${data.link._id}`)
    //         } catch (e) { }
    //     }
    // }



    const pressHandler = () => {
        const data = request('/api/link/add', 'POST', { ...newTransaction }, {
            Authorization: `Bearer ${auth.token}`
        })
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

    const operations = ['расходы', 'доходы', 'перевод между счетами'];
    const selectPperations = (name) => {
        setOperation(name)
    }

    const sources = ['наличные', 'заначка', 'карта МТБанка', 'карта Халва', 'яндекс деньги'];
    const selectSources = (name) => {
        setSource(name)
    }

    const categorys = ['спорт', 'еда', 'кредит', 'одежда', 'авто', 'интернет', 'телефон'];
    const selectCategory = (name) => {
        setCategory(name)
    }

    const sumChangeHadler = (event) => {
        setSum(event.target.value)
    }

    const commentChangeHadler = (event) => {
        setComment(event.target.value)
    }

    return (
        // <div className="row">
        //     <div className="col s8 offset-s2" style={{ paddingTop: '2rem' }}>
        //         <div className="input-field">
        //             <input
        //                 placeholder="Вставьте ссылку"
        //                 id="link"
        //                 type="text"
        //                 value={link}
        //                 onChange={e => setLink(e.target.value)}
        //                 onKeyPress={pressHandler}
        //             />
        //             <label htmlFor="link">Введите ссылку</label>
        //         </div>
        //     </div>            
        // </div>


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

                        {/* <li className='new-transaction__popup-item'>
                            <button className='new-transaction__popup-btn'>расходы</button>
                        </li>

                        <li className='new-transaction__popup-item'>
                            <button className='new-transaction__popup-btn'>доходы</button>
                        </li>

                        <li className='new-transaction__popup-item'>
                            <button className='new-transaction__popup-btn'>перевод между счетами</button>
                        </li> */}

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

                        {/* <li className='new-transaction__popup-item'>
                            <button className='new-transaction__popup-btn'>наличные</button>
                        </li>

                        <li className='new-transaction__popup-item'>
                            <button className='new-transaction__popup-btn'>заначка</button>
                        </li>

                        <li className='new-transaction__popup-item'>
                            <button className='new-transaction__popup-btn'>карта МТБанка</button>
                        </li>

                        <li className='new-transaction__popup-item'>
                            <button className='new-transaction__popup-btn'>карта Халва</button>
                        </li>

                        <li className='new-transaction__popup-item'>
                            <button className='new-transaction__popup-btn'>яндекс деньги</button>
                        </li>     */}

                        {sources.map((name, index) => (
                            <li key={`${name}_${index}`} className='new-transaction__popup-item'>
                                <button onClick={() => { selectSources(name) }} className='new-transaction__popup-btn'>{name}</button>
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

                        {/* <li className='new-transaction__popup-item'>
                            <button className='new-transaction__popup-btn'>спорт</button>
                        </li>

                        <li className='new-transaction__popup-item'>
                            <button className='new-transaction__popup-btn'>еда</button>
                        </li>

                        <li className='new-transaction__popup-item'>
                            <button className='new-transaction__popup-btn'>кредит</button>
                        </li>

                        <li className='new-transaction__popup-item'>
                            <button className='new-transaction__popup-btn'>одежда</button>
                        </li>

                        <li className='new-transaction__popup-item'>
                            <button className='new-transaction__popup-btn'>авто</button>
                        </li>

                        <li className='new-transaction__popup-item'>
                            <button className='new-transaction__popup-btn'>интернет</button>
                        </li>

                        <li className='new-transaction__popup-item'>
                            <button className='new-transaction__popup-btn'>телефон</button>
                        </li> */}

                        {categorys.map((name, index) => (
                            <li key={`${name}_${index}`} className='new-transaction__popup-item'>
                                <button onClick={() => { selectCategory(name) }} className='new-transaction__popup-btn'>{name}</button>
                            </li>
                        ))}

                    </ul>}
                </div>

                <div className='new-transaction__row'>
                    <h4 className='new-transaction__title'>Дата:</h4>
                    <div className='new-transaction__col'>
                        <span className='new-transaction__value'>12.07.2020 13:45</span>
                        <button className='new-transaction__btn'>
                            <img className='new-transaction__icon' src={penSvg} alt='' />
                        </button>
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
                        <button onClick={pressHandler} className='new-transaction__submit' type='button'>Подтвердить</button>
                    </div>

                </div>
            </div>

            {/* <button className='new-transaction__submit' type='button'>Подтвердить</button> */}
        </div>
    )
}
