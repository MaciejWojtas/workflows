import { ReactComponent as Clover } from '../assets/img/cards/Clover.svg';
import { ReactComponent as Diamond } from '../assets/img/cards/Diamond.svg';
import { ReactComponent as Heart } from '../assets/img/cards/Heart.svg';
import { ReactComponent as Spade } from '../assets/img/cards/Spade.svg';
import { Card } from '../types/card';

export const isAce = (card: Card): boolean => card.rank === 'A';

const suitImages = {
  C: Clover,
  D: Diamond,
  H: Heart,
  S: Spade,
};

const redSuits = ['H', 'D'];

export const getSuitImage = (card: Card) => suitImages[card.suit];
export const isRedCard = (card: Card) => redSuits.includes(card.suit);
