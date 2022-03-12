import { useMemo, useState } from 'react';
import { isAce } from '../helpers/card';
import { createShuffledDeck } from '../helpers/deck';
import { Card } from '../types/card';

const useCardDeck = () => {
  const [cardsLeft, setCardsLeft] = useState<Card[]>(createShuffledDeck());
  const [deal, setDeal] = useState<Card[]>([]);

  const acesLeft = useMemo(
    (): number => cardsLeft.filter((card) => isAce(card)).length,
    [cardsLeft]
  );

  const reset = (): void => {
    setDeal([]);
    setCardsLeft(createShuffledDeck());
  };

  const makeDeal = (): void => {
    setDeal(cardsLeft.slice(0, 5));
    setCardsLeft(cardsLeft.slice(5));
  };

  return { deal, makeDeal, reset, cardsLeft: cardsLeft.length, acesLeft };
};

export default useCardDeck;
