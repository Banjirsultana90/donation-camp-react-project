
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Cards = ({ cards, searchText }) => {
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    if (searchText) {
      const filtered = cards.filter((card) =>
        card.category.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredCards(filtered);
    } else {
      setFilteredCards(cards);
    }
  }, [cards, searchText]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
        {filteredCards.map((card) => (
          <Card key={card.id} card={card}></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
