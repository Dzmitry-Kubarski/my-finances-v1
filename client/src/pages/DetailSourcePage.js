// core
import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

// images
import sourcesSvg from '../images/money2.svg';
import ellipsisHorizontalSvg from '../images/ellipsis-horizontal.svg'

// hooks
import useSource from './useSource';
import useDeleteSource from './../components/SourcesList/useDeleteSource';

const DetailSourcePage = () => {
    const history = useHistory()

    const sourceId = useParams().id
    const [isPopup, seTisPopup] = React.useState(false)

    const { data, isLoading, error } = useSource(sourceId)
    const [deleteSource, { status: deleteSourceStatus }] = useDeleteSource();

    const deleteSourceHandler = async (sourceId) => {
        deleteSource(sourceId)
        history.push(`/home/`)
    }

    const tooglePopup = () => {
        seTisPopup(!isPopup)
    };

    if (isLoading) return 'Loading...'
    if (error) return 'Ошибка при получении счетов: ' + error.message

    return (
        <div className='page  detailSourcePage'>
            <div className='container'>
                <div className='page__inner'>
                    <div className='sources-item'>
                        <img className='sources-item__icon' src={sourcesSvg} alt="" />

                        <h4 className='sources-item__title'>{data.title}</h4>

                        <div className='sources-item__total'>{data.total} руб</div>

                        <button onClick={tooglePopup} className='new-transaction__btn'>
                            <img className='new-transaction__icon' src={ellipsisHorizontalSvg} alt='' />
                        </button>

                        {isPopup &&
                            <ul className='new-transaction__popup-list'>
                                <li className='new-transaction__popup-item'>
                                    <button onClick={() => { deleteSourceHandler(sourceId) }} className='new-transaction__popup-btn'>Удалить</button>
                                    {/* <button className='new-transaction__popup-btn'>Удалить</button> */}
                                </li>

                                <li className='new-transaction__popup-item'>
                                    <button className='new-transaction__popup-btn'>Редактировать</button>
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