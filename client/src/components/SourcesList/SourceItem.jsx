// core
import React from 'react';

// hooks
import useDeleteSource from './useDeleteSource';

// images
import sourcesSvg from '../../images/money2.svg';
import ellipsisHorizontalSvg from '../../images/ellipsis-horizontal.svg'


const SourceItem = ({ sources }) => {
    const [deleteSource, { status: deleteSourceStatus }] = useDeleteSource();
    const [itemsSources, setItemsSources] = React.useState(sources);

    const deleteSourceHandler = async (_id) => {
        deleteSource(_id)
    }

    const tooglePopup = (_id) => {
        const newItemsList = itemsSources.map((item) => {
            const newItem = { ...item, isModal: false }

            if (item._id === _id) {
                newItem.isModal = !item.isModal;
            }
            return newItem;
        });

        setItemsSources(newItemsList)
    };

    React.useEffect(() => {
        setItemsSources(sources)
    }, [sources])


    const sourcesJsx = itemsSources && itemsSources.map(({ title, total, _id, isModal }) => (
        <li key={_id} className='sources-item'>
            <img className='sources-item__icon' src={sourcesSvg} alt="" />

            <h4 className='sources-item__title'>{title}</h4>

            <div className='sources-item__total'>{total} руб</div>

            <button onClick={() => { tooglePopup(_id) }} className='new-transaction__btn'>
                <img className='new-transaction__icon' src={ellipsisHorizontalSvg} alt='' />
            </button>

            {isModal &&
                <ul className='new-transaction__popup-list'>
                    <li className='new-transaction__popup-item'>
                        <button onClick={() => { deleteSourceHandler(_id) }} className='new-transaction__popup-btn'>Удалить</button>
                    </li>

                    <li className='new-transaction__popup-item'>
                        <button className='new-transaction__popup-btn'>Редактировать</button>
                    </li>
                </ul>
            }
        </li>
    ))



    if (!sources) {
        return (
            <p>ничего нет</p>
        )
    }


    return (
        <>
            {sourcesJsx}
        </>
    );
};

export default SourceItem;