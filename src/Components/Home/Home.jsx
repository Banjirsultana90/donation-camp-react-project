
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Cards from '../Cards/Cards';

import React, { useState, useEffect } from 'react';

const Home = () => {
    const [searchText, setSearchText] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div>
      <Banner onSearch={setSearchText} />
      <div className="donations-list">
        <Cards cards={cards} searchText={searchText} />
      </div>
    </div>
  );

    
            



       
   
};

export default Home;