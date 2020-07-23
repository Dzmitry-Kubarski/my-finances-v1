import React, { useContext, useEffect, useState } from 'react';
import { useHttp } from '../hooks/http.hook';
import { AuthContext } from '../context/AuthContext';
import { useHistory } from 'react-router-dom';

import ellipsisHorizontalSvg from '../images/ellipsis-horizontal.svg'
import appsSvg from '../images/apps.svg'
import checkSvg from '../images/check.svg'

export const CreatePage = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)
    const { request } = useHttp()
    const [link, setLink] = useState('')

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

            <div className='new-transaction__tabs-wrap'>
                <div className='new-transaction__tabs-inner'>
                    <button className='new-transaction__tab' type='button'>
                        <span className='new-transaction__tab-inner'>
                            <span className='new-transaction__tab-icon'>+</span>
                            <span className='new-transaction__tab-title'>Тип</span>
                        </span>
                    </button>

                    <button className='new-transaction__tab' type='button'>
                        <span className='new-transaction__tab-inner'>
                            <span className='new-transaction__tab-icon'>+</span>
                            <span className='new-transaction__tab-title'>Счёт</span>
                        </span>
                    </button>

                    <button className='new-transaction__tab' type='button'>
                        <span className='new-transaction__tab-inner'>
                            <span className='new-transaction__tab-icon'>+</span>
                            <span className='new-transaction__tab-title'>Сумма</span>
                        </span>
                    </button>

                    <button className='new-transaction__tab' type='button'>
                        <span className='new-transaction__tab-inner'>
                            <span className='new-transaction__tab-icon'>+</span>
                            <span className='new-transaction__tab-title'>Категория</span>
                        </span>
                    </button>

                    <button className='new-transaction__tab' type='button'>
                        <span className='new-transaction__tab-inner'>
                            <span className='new-transaction__tab-icon'>+</span>
                            <span className='new-transaction__tab-title'>Дата</span>
                        </span>
                    </button>

                    <button className='new-transaction__tab' type='button'>
                        <span className='new-transaction__tab-inner'>
                            <span className='new-transaction__tab-icon'>+</span>
                            <span className='new-transaction__tab-title'>Коммент</span>
                        </span>
                    </button>
                </div>

            </div>

            <div className='new-transaction'>
                {/* <div className='new-transaction__row'>
                    <h4 className='new-transaction__title'>Тип операции:</h4>

                    <div className='new-transaction__col'>
                        <span className='new-transaction__icon'>расходы</span>
                        <img className='new-transaction__icon' src={appsSvg} alt='' />
                    </div>
                </div>

                <div className='new-transaction__row'>
                    <h4 className='new-transaction__title'>Счёт:</h4>
                    <div className='new-transaction__col'>
                        <span className='new-transaction__icon'>наличные</span>
                        <img className='new-transaction__icon' src={ellipsisHorizontalSvg} alt='' />
                    </div>
                </div>

                <div className='new-transaction__row'>
                    <h4 className='new-transaction__title'>Сумма:</h4>
                    <input />
                </div>

                <div className='new-transaction__row'>
                    <h4 className='new-transaction__title'>Категория:</h4>
                    <div className='new-transaction__col'>
                        <span className='new-transaction__icon'>одежда</span>
                        <img className='new-transaction__icon' src={ellipsisHorizontalSvg} alt='' />
                    </div>
                </div>

                <div className='new-transaction__row'>
                    <h4 className='new-transaction__title'>Дата:</h4>
                    <div className='new-transaction__col'>
                        <span className='new-transaction__icon'>32.07.2020 13:45</span>
                        <img className='new-transaction__icon' src={ellipsisHorizontalSvg} alt='' />
                    </div>
                </div>

                <div className='new-transaction__row'>
                    <h4>Комментарий</h4>
                    <textarea />
                </div> */}

                <img src={checkSvg} alt='' />
            </div>
        </div>
    )
}
