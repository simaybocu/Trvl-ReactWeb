import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Buradan konu başlıklarına göz atabilirsin!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='En göz alıcı ve huzur verici şelaleler'
              label='Huzur'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Denizin ortasında özel yolculuklar'
              label='Lüks'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Okyanus ortasından tüyler ürpertici gizemli görüntüler'
              label='Gizem'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Spor dallarının ilginç ve merak dolu ortamları'
              label='Macera'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Çöl ortasında sıcak rüzgarı ve kum tanelerini hissettirecek görüntüler'
              label='Adrenalin'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;