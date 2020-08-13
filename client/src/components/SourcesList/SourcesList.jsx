//core
import React from 'react';
import { NavLink } from 'react-router-dom';

//hooks
import useSources from './useSources'

//images
import sourcesSvg from '../../images/money2.svg';
import ellipsisHorizontalSvg from '../../images/ellipsis-horizontal.svg'


// Swiper
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper components
SwiperCore.use([Navigation, Scrollbar, A11y]);


const SourcesList = () => {
    const { data, isLoading, error } = useSources()

    const sourcesJsx = data && data.map(({ title, total, _id }) => (
        <SwiperSlide key={_id} className='sources-item'>
            <div className='sources-item__row'>
                <div className="logo  header__logo">
                    <img className='logo__img' src={sourcesSvg} alt="logo" />
                    <h1 className="logo__text">Finance</h1>
                </div>


                <button className='new-transaction__btn'>
                    <img className='new-transaction__icon' src={ellipsisHorizontalSvg} alt='' />
                </button>
            </div>

            <h4 className='sources-item__title'>{title}</h4>

            <div className='sources-item__total'>{total} руб</div>
        </SwiperSlide>
    ))

    if (isLoading) return 'Loading...'
    if (error) return 'Ошибка при получении счетов: ' + error.message

    if (!data) {
        return (
            <p>ничего нет</p>
        )
    }

    return (
        <div className='sources'>
            <div className='title-wrap'>
                <h2>Ваши счета</h2>
                <NavLink className='btn-add' to="/create-source">+</NavLink>
            </div>

            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className='slider'
            >
                {sourcesJsx}
            </Swiper>
        </div>
    );
};

export default SourcesList;