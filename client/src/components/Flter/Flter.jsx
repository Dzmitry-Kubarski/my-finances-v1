//core
import React, { useState } from 'react';

//hooks
import useCategories from '../Categories/useCategories';
import useSources from './../SourcesList/useSources';

//images
import chevronDownSvg from '../../images/chevron-down.svg';


export const Filter = ({ setIsOpenFilterList, fetchLinks, setIsNotFound }) => {
    const [popupType, setPopupType] = useState(false);
    const [popupSources, setPopupSources] = useState(false);
    const [popupCategory, setPopupCategory] = useState(false);

    const [operation, setOperation] = useState('');
    const [source, setSource] = useState('');
    const [category, setCategory] = useState('');

    const query = {
        operation,
        source,
        category,
    }

    const reset = {}

    const { data: categories, isLoading, error: errorCategories } = useCategories()
    const { data: sources, isLoading: sourcesLoading, error: errorSources } = useSources()

    const fetchFilterListHandler = () => {
        setIsOpenFilterList(true)
        fetchLinks(query)
    }

    const resetFilterListHandler = () => {
        setIsOpenFilterList(true)
        fetchLinks(reset)
        setOperation('')
        setSource('')
        setCategory('')
        setIsNotFound(false)
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

    if (isLoading) return 'Loading...'
    if (sourcesLoading) return 'Loading...'

    if (errorCategories) return 'Ошибка при получении счетов: ' + errorCategories.message
    if (errorSources) return 'Ошибка при получении счетов: ' + errorSources.message


    return (
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


            <div className='new-transaction__row  filter-btns'>
                <button onClick={resetFilterListHandler} className='new-transaction__submit' type='button'>Очистить</button>
                <button onClick={fetchFilterListHandler} className='new-transaction__submit' type='button'>Показать</button>
            </div>
        </div>
    )
}
