// core
import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

// images
import ellipsisHorizontalSvg from '../../images/ellipsis-horizontal.svg'
import tagSvg from '../../images/tag.svg';

// context
import { AuthContext } from '../../context/AuthContext';

// hooks
import useDeleteCategory from '../../components/Categories/useDeleteCategory';
import useCategory from '../CategoriesPage/useCategory';
import { useHttp } from '../../hooks/http.hook';


const DetailCategoriesPage = () => {
    const auth = React.useContext(AuthContext)
    const { request } = useHttp();
    const history = useHistory()
    const categoryId = useParams().id

    const [isPopup, seTisPopup] = React.useState(false)
    const { data, isLoading, error } = useCategory(categoryId)
    const [editMode, setEditMode] = React.useState(false)
    const [newTitleCategory, setNewTitleCategory] = React.useState('')

    const [deleteCategory, { status: deleteCategoryStatus }] = useDeleteCategory();

    const deleteCategoryHandler = async (categoryId) => {
        deleteCategory(categoryId)
        history.push(`/categories/`)
    }

    const tooglePopup = () => {
        seTisPopup(!isPopup)
    };

    const toogleEditMode = () => {
        setEditMode(!editMode)
        seTisPopup(!isPopup)
    }

    const changeNewTitleCategory = (e) => {
        setNewTitleCategory(e.target.value)
    }

    const saveCategory = async (e) => {
        e.preventDefault();

        const data = await request('/api/categories/edit', 'POST', { newTitleCategory, categoryId }, {
            Authorization: `Bearer ${auth.token}`
        })
        history.push(`/categories/`)
    }



    if (isLoading) return <p className='load-statistics'>Загрузка...</p>
    if (error) return 'Ошибка при получении счетов: ' + error.message


    return (
        <div className='page  detailCategoryPage'>
            <div className='container'>
                <div className='page__inner'>
                    <form className='sources-item' onSubmit={saveCategory}>
                        <img className='sources-item__icon' src={tagSvg} alt="" />

                        {!editMode
                            ? <h4 className='sources-item__title'>{data.title}</h4>
                            : <input onChange={(e) => { changeNewTitleCategory(e) }}
                                className='sources-item__input'
                                type='text'
                                placeholder={data.title}
                                value={newTitleCategory}
                                required
                            />
                        }

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
                                    <button onClick={() => { deleteCategoryHandler(categoryId) }} className='new-transaction__popup-btn'>Удалить</button>
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

export default DetailCategoriesPage;