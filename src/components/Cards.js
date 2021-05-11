import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC destinations!</h1>
            <dic className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards_items">

                        <CardItem src="images/img-9.jpg" text="Explore the hidden waterfall deep inside the Amazon Jungle"
                            label='Adventure'
                            path='/services' />

                        <CardItem src="images/img-2.jpg" text="Travel through the islands of Bali in a private cruise"
                            label='Luxury'
                            path='/services' />
                    </ul>
                    <ul className="cards_items">

                        <CardItem src="images/img-9.jpg" text="Explore the hidden waterfall deep inside the Amazon Jungle"
                            label='Adventure'
                            path='/services' />

                        <CardItem src="images/img-2.jpg" text="Travel through the islands of Bali in a private cruise"
                            label='Luxury'
                            path='/services' />

                        <CardItem src="images/img-2.jpg" text="Travel through the islands of Bali in a private cruise"
                            label='Luxury'
                            path='/services' />
                    </ul>
                </div>
            </dic>
        </div>
    )
}

export default Cards
