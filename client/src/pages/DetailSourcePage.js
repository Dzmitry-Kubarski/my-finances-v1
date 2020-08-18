// core
import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

// images
import sourcesSvg from '../images/money2.svg';
import ellipsisHorizontalSvg from '../images/ellipsis-horizontal.svg'

// context
import { AuthContext } from './../context/AuthContext';

// hooks
import useSource from './useSource';
import useDeleteSource from './../components/SourcesList/useDeleteSource';
import { useHttp } from './../hooks/http.hook';


const DetailSourcePage = () => {
    const auth = React.useContext(AuthContext)
    const { request, } = useHttp();
    const history = useHistory()
    const sourceId = useParams().id

    const { data, isLoading, error } = useSource(sourceId)
    const [isPopup, seTisPopup] = React.useState(false)
    const [editMode, setEditMode] = React.useState(false)
    const [newTitleSource, setNewTitleSource] = React.useState('')

    const [deleteSource, { status: deleteSourceStatus }] = useDeleteSource();

    const deleteSourceHandler = async (sourceId) => {
        deleteSource(sourceId)
        history.push(`/home/`)
    }

    const tooglePopup = () => {
        seTisPopup(!isPopup)
    };

    const toogleEditMode = () => {
        setEditMode(!editMode)
        seTisPopup(!isPopup)
    }

    const changeNewTitleSource = (e) => {
        setNewTitleSource(e.target.value)
    }

    const saveSource = async () => {
        const data = await request('/api/sources/edit', 'POST', { newTitleSource, sourceId }, {
            Authorization: `Bearer ${auth.token}`
        })
        history.push(`/home/`)
    }


    if (isLoading) return 'Loading...'
    if (error) return 'Ошибка при получении счетов: ' + error.message

    return (
        <div className='page  detailSourcePage'>
            <div className='container'>
                <div className='page__inner'>
                    <div className='sources-item'>
                        <img className='sources-item__icon' src={sourcesSvg} alt="" />

                        {!editMode
                            ? <h4 className='sources-item__title'>{data.title}</h4>
                            : <input onChange={(e) => { changeNewTitleSource(e) }} className='sources-item__input' type='text' placeholder={data.title} value={newTitleSource} />
                        }

                        <div className='sources-item__total'>{data.total} руб</div>

                        {!editMode
                            ?
                            <button onClick={tooglePopup} className='new-transaction__btn'>
                                <img className='new-transaction__icon' src={ellipsisHorizontalSvg} alt='' />
                            </button>
                            :
                            <button onClick={saveSource} className='new-transaction__btn'>
                                ок
                            </button>
                        }

                        {isPopup &&
                            <ul className='new-transaction__popup-list'>
                                <li className='new-transaction__popup-item'>
                                    <button onClick={() => { deleteSourceHandler(sourceId) }} className='new-transaction__popup-btn'>Удалить</button>
                                </li>

                                <li className='new-transaction__popup-item'>
                                    <button onClick={toogleEditMode} className='new-transaction__popup-btn'>Редактировать</button>
                                </li>
                            </ul>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailSourcePage;