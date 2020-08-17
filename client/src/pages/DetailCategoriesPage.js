// core
import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

// images
import sourcesSvg from '../images/money2.svg';
import ellipsisHorizontalSvg from '../images/ellipsis-horizontal.svg'
import tagSvg from '../images/tag.svg';

// hooks
import useDeleteCategory from './../components/Categories/useDeleteCategory';
import useCategory from './useCategory';


const DetailCategoriesPage = () => {
    const history = useHistory()

    const categoryId = useParams().id

    const [isPopup, seTisPopup] = React.useState(false)

    const { data, isLoading, error } = useCategory(categoryId)
    const [deleteCategory, { status: deleteCategoryStatus }] = useDeleteCategory();

    const deleteCategoryHandler = async (categoryId) => {
        deleteCategory(categoryId)
        history.push(`/categories/`)
    }

    const tooglePopup = () => {
        seTisPopup(!isPopup)
    };

    if (isLoading) return 'Loading...'
    if (error) return 'Ошибка при получении счетов: ' + error.message


    return (
        <div className='page  detailCategoryPage'>
            <div className='container'>
                <div className='page__inner'>
                    <div className='sources-item'>
                        <img className='sources-item__icon' src={tagSvg} alt="" />

                        <h4 className='sources-item__title'>{data.title}</h4>

                        <button onClick={tooglePopup} className='new-transaction__btn'>
                            <img className='new-transaction__icon' src={ellipsisHorizontalSvg} alt='' />
                        </button>

                        {isPopup &&
                            <ul className='new-transaction__popup-list'>
                                <li className='new-transaction__popup-item'>
                                    <button onClick={() => { deleteCategoryHandler(categoryId) }} className='new-transaction__popup-btn'>Удалить</button>
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

export default DetailCategoriesPage;