import React from 'react';

const HotelList = ({...props}) => {

    return (
        <div className='hotel_list'>
            <div className='block_with_hotels'>
                <h4>{props.post.label}</h4>
                <span><h6>Рейтинг: {props.post.rating} из 10</h6></span>
                <div className='buy_button_and_price'>
                    <p>цена за 1 ночь  <span>{props.post.price} Р</span></p>
                    <button className='buy_button' onClick={()=> props.buyButton(props.post)}>Купить</button>
                </div>
            </div>
            <div className='btn_heart'>
                <div  className={props.post.buttonActivation === true? "btn btn_active" : "btn"}
                
                onClick={() => props.addPostInFavoritList(props.post)}></div>
  
            </div>
        </div>
        
    );
};

export default HotelList;