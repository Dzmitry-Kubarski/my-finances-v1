//core
import React from 'react';

//components
import CategoriesList from '../../components/Categories/CategoriesList';

const CategoriesPage = () => {
    return (
        <div className='page  categoriesPage'>
            <div className='container'>
                <div className='page__inner'>
                    <CategoriesList />
                </div>
            </div>
        </div>
    );
};

export default CategoriesPage;