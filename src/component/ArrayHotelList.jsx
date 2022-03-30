import React from 'react';
import HotelList from './HotelList';

const ArrayHotelList = ({addPostInFavoritList, arrayHotelPost, btnTest, buyButton}) => {
    return (
        <div className="cluster_overflow">
            {arrayHotelPost.map(event=> <HotelList post={event} key={event.id} buyButton={buyButton} addPostInFavoritList={addPostInFavoritList} btnTest={btnTest}/>)}
        </div>
    );
};

export default ArrayHotelList;