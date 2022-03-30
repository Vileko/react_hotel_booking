import React from 'react';

const FavoritesHotel = ({...props}) => {

    

    return (
        <div className='hotel_list'>
            <div className='block_with_hotels'>
                <h4>{props.favoritePost.label}</h4>
                <span><h6>Рейтинг: {props.favoritePost.rating} из 10</h6></span>
                <div className='buy_button_and_price'>
                    <p>цена за 1 ночь  <span>{props.favoritePost.price} Р</span></p>
                    <button onClick={()=> props.buyButtonFavorit(props.favoritePost)}>Купить</button>
                </div>
            </div>
            <div className='btn_heart'>
                <div className='btn btn_favorite'
                
                onClick={() => props.remove(props.favoritePost)}></div>
  
            </div>
        </div>
    );
};

export default FavoritesHotel;