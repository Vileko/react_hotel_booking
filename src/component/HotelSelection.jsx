import React, { useEffect, useMemo, useState } from 'react';
import Input from './UI/Input/Input';
import Button from './UI/Button/Button';
import ArrayHotelList from './ArrayHotelList';
import FavoritesHotel from './FavoritesHotel';
import fileHotels from './fileHotels.json'
import MySelect from './UI/select/MySelect';
import {
    Link,
  } from "react-router-dom";
import '../style/styleTabs.css'
import BuyingHotelRoom from './BuyingHotelRoom';

const HotelSelection = () => {
    const [postHotel, setPostHotel] = useState([]);
    const [toggleState, setToggleState] = useState(1)
    const [favoritesList, setFavoritesList] = useState([]);
    const [sortsPosts, setSortsPosts] = useState('');
    const [searhQuery, setSearhQuery] = useState('');
    const [arraySwitch, setArraySwitch] = useState([]);

    const [purchasArray, setPurchasArray] = useState([]);
    const [contentSwitching, setContentSwitching] = useState(false);

    function toggleTab(index){
        setToggleState(index)
    }
    
    function buyButton(post){
        setContentSwitching(true);
        setPurchasArray([post])     
    }
   
    function backToSelection() {
        setContentSwitching(false)
        setPurchasArray([])
    }

    function buyButtonFavorit(arrayPosts){
        setContentSwitching(true)
        setPurchasArray([arrayPosts])
    }
    
    function addPostInFavoritList(post){
        const itemIndex = favoritesList.findIndex(value => value.id === post.id)
        
        if(itemIndex < 0){
            const newPost = {
                ...post,
            }
            setFavoritesList([...favoritesList, newPost])
            const add = {
                ...post,
                buttonActivation: true
            }
            setPostHotel(postHotel.map(obj => obj.id === post.id ? add : obj))
        } else {
            const add = {
                ...post,
                buttonActivation: false
            }
            setPostHotel(postHotel.map(obj => obj.id === post.id ? add : obj))
            setFavoritesList(favoritesList.filter(obj => obj.id !== post.id))
        }
    }

     useEffect(() => {
        fetchPosts()
       
    }, [])

    function fetchPosts(){
        let posts = fileHotels.results.hotels;
        setPostHotel(posts)
    }

    const sortPosts = useMemo(() => {
        if(toggleState === 1){
            setArraySwitch(postHotel)
        } else {
            setArraySwitch(favoritesList)
        }
        if(sortsPosts === 'rating'){
            return [...arraySwitch].sort((a,b) => a.rating - b.rating)
        }else if(sortsPosts === 'rating_1'){
            return [...arraySwitch].sort((a,b) => b.rating - a.rating)
        }else if (sortsPosts === 'price'){
            return [...arraySwitch].sort((a,b) => a.price - b.price)
        }else if (sortsPosts === 'price_1'){
            return [...arraySwitch].sort((a,b) => b.price - a.price)
        }
        return arraySwitch 
    },[sortsPosts, postHotel, toggleState, favoritesList, arraySwitch]);

    const sortAndSearchedPost = useMemo(() => {
        return [...sortPosts].filter(post => post.label.toLowerCase().includes(searhQuery.toLowerCase()))
    },[searhQuery, sortPosts])

    const sortingPost = (sort) => {
         setSortsPosts(sort)
    }

    return (
        <div className='container'>
            <div>
                <Link className='entrance' to="/s">????????</Link>
            </div>
            
            {contentSwitching === true && 
               <div>
                    <button onClick={backToSelection}>??????????</button>
                    {purchasArray.map(array => <BuyingHotelRoom arrayPosts={array} key={array.id}/>)}
               </div>
            }
            
            {contentSwitching === false && 
                <div className='container'>
                    <h1>Simple Hotel Check</h1>
                    <div>
                        <p>?????????? ?????????? ?? ????????????</p>
                        <Input 
                            value={searhQuery}
                            onChange={e => setSearhQuery(e.target.value)}
                            name="search"
                            type="text" 
                            placeholder="?????????? ?????????? ???????????"
                        />
                    </div>
                    <Button>??????????</Button>
                    <div className='block_tabs'>
                        <div className={toggleState === 1 ? "tabs active-tabs" : 'tabs'}
                            onClick={() => toggleTab(1)}
                        >
                            ?????? ??????????
                        </div>
                        <div className={toggleState === 2 ? "tabs active-tabs" : 'tabs'}
                            onClick={() => toggleTab(2)}
                        >
                            ??????????????????
                        </div>
                    </div>
        
                    <MySelect
                        defualtValue="???????????????????? ????"
                        value={sortsPosts}
                        onChange={sortingPost}
                        options={[
                            {value: 'rating', name: '?????????????? ???? ??????????????????????'},
                            {value: 'rating_1', name: '?????????????? ???? ????????????????'},
                            {value: 'price', name: '?????????????????????? ????????'},
                            {value: 'price_1', name: '???????????????? ????????'}
                        ]}
                    />

                    <div className='bloc_tabs'>
                        <div className={toggleState === 1 ? "content  active-content" : "content"}>
                        <ArrayHotelList arrayHotelPost={sortAndSearchedPost} buyButton={buyButton} addPostInFavoritList={addPostInFavoritList}/>
                        </div>
                        <div className={toggleState === 2 ? "content  active-content" : "content"}>
                            <div className="cluster_overflow">
                                {sortAndSearchedPost.map(postContent => <FavoritesHotel favoritePost={postContent} key={postContent.id}  remove={addPostInFavoritList} buyButtonFavorit={buyButtonFavorit}/>)}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default HotelSelection;