import React from 'react';
import renderer from 'react-test-renderer';
import { cloverCard, spadeCard, diamondCard, heartCard, card } from '../../tests/mocks/cards';
import { Card } from '../../types/card';
import CardGame from './CardGame';

let mockDeal: Card[] = [];
let mockCardsLeft = 52;
let mockAcesLeft = 4;

jest.mock('../../hooks/useCardDeck', () => ({
  __esModule: true,
  default: () => ({
    deal: mockDeal,
    cardsLeft: mockCardsLeft,
    acesLeft: mockAcesLeft,
    makeDeal: jest.fn(),
    reset: jest.fn(),
  }),
}));

it('renders correctly ', () => {
  const tree = renderer.create(<CardGame />).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders correctly after deal of 5', () => {
  mockDeal = [cloverCard, spadeCard, diamondCard, heartCard, card];
  mockCardsLeft = 47;
  mockAcesLeft = 3;
  const tree = renderer.create(<CardGame />).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders correctly when lose', () => {
  mockDeal = [cloverCard, spadeCard, diamondCard, heartCard, card];
  mockCardsLeft = 47;
  mockAcesLeft = 0;
  const tree = renderer.create(<CardGame />).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders correctly after last deal of 2 and win', () => {
  mockDeal = [cloverCard, card];
  mockCardsLeft = 0;
  mockAcesLeft = 0;
  const tree = renderer.create(<CardGame />).toJSON();

  expect(tree).toMatchSnapshot();
});
