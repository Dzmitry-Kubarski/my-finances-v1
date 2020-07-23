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

    // const history = useHistory()
    // const auth = useContext(AuthContext)
    // const { request } = useHttp()
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

    const tooglePopupType = () => {
        setPopupType(!popupType)
    }

    const tooglePopupSources = () => {
        setPopupSources(!popupSources)
    }

    const tooglePopupCategory = () => {
        setPopupCategory(!popupCategory)
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
                        <span className='new-transaction__value'>расходы</span>
                        <button onClick={tooglePopupType} className='new-transaction__btn'>
                            <img className='new-transaction__icon' src={chevronDownSvg} alt='' />
                        </button>
                    </div>

                    {popupType && <ul className='new-transaction__popup-list'>
                        <li className='new-transaction__popup-item'>
                            <button className='new-transaction__popup-btn'>расходы</button>
                            <button className='new-transaction__popup-btn'>доходы</button>
                            <button className='new-transaction__popup-btn'>перевод между счетами</button>
                        </li>
                    </ul>}
                </div>

                <div className='new-transaction__row'>
                    <h4 className='new-transaction__title'>Счёт:</h4>

                    <div className='new-transaction__col'>
                        <span className='new-transaction__value'>наличные</span>

                        <button onClick={tooglePopupSources} className='new-transaction__btn'>
                            <img className='new-transaction__icon' src={chevronDownSvg} alt='' />
                        </button>
                    </div>

                    {popupSources && <ul className='new-transaction__popup-list'>
                        <li className='new-transaction__popup-item'>
                            <button className='new-transaction__popup-btn'>наличные</button>
                            <button className='new-transaction__popup-btn'>заначка</button>
                            <button className='new-transaction__popup-btn'>карта МТБанка</button>
                            <button className='new-transaction__popup-btn'>карта Халва</button>
                            <button className='new-transaction__popup-btn'>яндекс деньги</button>
                        </li>
                    </ul>}
                </div>

                <div className='new-transaction__row'>
                    <h4 className='new-transaction__title'>Категория:</h4>

                    <div className='new-transaction__col'>
                        <span className='new-transaction__value'>одежда</span>
                        <button onClick={tooglePopupCategory} className='new-transaction__btn'>
                            <img className='new-transaction__icon' src={chevronDownSvg} alt='' />
                        </button>
                    </div>

                    {popupCategory && <ul className='new-transaction__popup-list'>
                        <li className='new-transaction__popup-item'>
                            <button className='new-transaction__popup-btn'>спорт</button>
                            <button className='new-transaction__popup-btn'>еда</button>
                            <button className='new-transaction__popup-btn'>кредит</button>
                            <button className='new-transaction__popup-btn'>одежда</button>
                            <button className='new-transaction__popup-btn'>авто</button>
                            <button className='new-transaction__popup-btn'>интернет</button>
                            <button className='new-transaction__popup-btn'>телефон</button>
                        </li>
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
                    <textarea placeholder='Описание' />
                </div>

                <div className='new-transaction__row'>
                    <h4 className='new-transaction__title'>Сумма:</h4>
                    <div className='new-transaction__col'>
                        <input type='text' placeholder='сумма' />
                        <button className='new-transaction__submit' type='button'>Подтвердить</button>
                    </div>

                </div>
            </div>

            {/* <button className='new-transaction__submit' type='button'>Подтвердить</button> */}
        </div>
    )
}
