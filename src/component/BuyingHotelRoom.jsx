import React from 'react';
import Button from './UI/Button/Button';

const BuyingHotelRoom = ({...props}) => {

    

    return (
        <div className='hotel_list hotel_list_flex'>
            <h4>{props.arrayPosts.label}</h4>
             <span>Рейтинг: {props.arrayPosts.rating} из 10</span>

            <h5>Фото номера</h5>
            <div className='foto_hotel'>
                <div><img src={props.arrayPosts.fotoHotel.url} alt="фото отеля"/></div>
            </div>
            <div>
                <h4>В стоимость включенно:</h4>
                <p>{props.arrayPosts.included.food}</p>
                <p>{props.arrayPosts.included.kidsClub}</p>
                <p>{props.arrayPosts.included.swimmingPool}</p>
                <p>{props.arrayPosts.included.sport}</p>
                <p>{props.arrayPosts.included.massage}</p>
            </div>
            <p>цена за 1 ночь  <span>{props.arrayPosts.price} Р</span>
                <Button>Оформить</Button>
            </p>
        </div>
    );
};

export default BuyingHotelRoom;