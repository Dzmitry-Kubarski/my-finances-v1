// core
import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

// images
import sourcesSvg from '../../images/money2.svg';
import ellipsisHorizontalSvg from '../../images/ellipsis-horizontal.svg'

// context
import { AuthContext } from '../../context/AuthContext';

// hooks
import useSource from './useSource';
import useDeleteSource from '../../components/SourcesList/useDeleteSource';
import { useHttp } from '../../hooks/http.hook';


const DetailSourcePage = () => {
    const auth = React.useContext(AuthContext)
    const { request, } = useHttp();
    const history = useHistory()
    const sourceId = useParams().id

    const { data, isLoading, error } = useSource(sourceId)
    const [isPopup, seTisPopup] = React.useState(false)
    const [editMode, setEditMode] = React.useState(false)
    const [newTitleSource, setNewTitleSource] = React.useState('')

    const [deleteSource] = useDeleteSource();

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

    const saveSource = async (e) => {
        e.preventDefault();

        await request('/api/sources/edit', 'POST', { newTitleSource, sourceId }, {
            Authorization: `Bearer ${auth.token}`
        })
        history.push(`/home/`)
    }

    if (isLoading) return <p className='load-statistics'>Загрузка...</p>
    if (error) return 'Ошибка при получении счетов: ' + error.message

    return (
        <div className='page  detailSourcePage'>
            <div className='container'>
                <div className='page__inner'>
                    <form className='sources-item' onSubmit={saveSource}>
                        <img className='sources-item__icon' src={sourcesSvg} alt="" />

                        {!editMode
                            ? <h4 className='sources-item__title'>{data.title}</h4>
                            : <input onChange={(e) => { changeNewTitleSource(e) }}
                                className='sources-item__input'
                                type='text' placeholder={data.title}
                                value={newTitleSource}
                                required
                            />
                        }

                        <div className='sources-item__total'>{data.total.toFixed(2)} руб</div>

                        {!editMode
                            ?
                            <button onClick={tooglePopup} className='new-transaction__btn' type='button'>
                                <img className='new-transaction__icon' src={ellipsisHorizontalSvg} alt='' />
                            </button>
                            :
                            <button className='new-transaction__btn' type='submit'>
                                ок
                            </button>
                        }

                        {isPopup &&
                            <ul className='new-transaction__popup-list'>
                                <li className='new-transaction__popup-item'>
                                    <button onClick={() => { deleteSourceHandler(sourceId) }} className='new-transaction__popup-btn' type='button'>Удалить</button>
                                </li>

                                <li className='new-transaction__popup-item'>
                                    <button onClick={toogleEditMode} className='new-transaction__popup-btn'>Редактировать</button>
                                </li>
                            </ul>
                        }
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DetailSourcePage;