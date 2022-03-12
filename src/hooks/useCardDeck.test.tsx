import React, { FunctionComponent } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Card } from '../types/card';
import useCardDeck from './useCardDeck';

const firstDealCards: Card[] = [
  { suit: 'C', rank: 'A' },
  { suit: 'H', rank: 'A' },
  { suit: 'H', rank: '2' },
  { suit: 'H', rank: 'Q' },
  { suit: 'D', rank: '2' },
];

const secondDealCards: Card[] = [
  { suit: 'D', rank: 'A' },
  { suit: 'C', rank: '6' },
  { suit: 'H', rank: 'K' },
  { suit: 'H', rank: 'Q' },
  { suit: 'C', rank: '10' },
];

const thirdDealCards: Card[] = [
  { suit: 'S', rank: 'A' },
  { suit: 'C', rank: 'J' },
  { suit: 'S', rank: 'K' },
];

jest.mock('../helpers/deck', () => ({
  createShuffledDeck: (): Card[] => [...firstDealCards, ...secondDealCards, ...thirdDealCards],
}));

let deal: Card[];
let makeDeal: () => void;
let reset: () => void;
let cardsLeft: number;
let acesLeft: number;

const TestComponent: FunctionComponent = () => {
  ({ deal, makeDeal, reset, cardsLeft, acesLeft } = useCardDeck());

  return null;
};

const callMakeDeal = () => {
  act(() => {
    makeDeal();
  });
};

let container: Element | null = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);

  act(() => {
    render(<TestComponent />, container);
  });
});

afterEach(() => {
  unmountComponentAtNode(container as Element);
  (container as Element).remove();
  container = null;
});

describe('useCardDeck hook', () => {
  it('provides expected values', async () => {
    expect(deal).toHaveLength(0);
    expect(deal).toEqual([]);
    expect(acesLeft).toEqual(4);
    expect(cardsLeft).toEqual(13);
  });

  it('after calling makeDeal method provides expected values', async () => {
    callMakeDeal();

    expect(deal).toHaveLength(5);
    expect(deal).toEqual(firstDealCards);
    expect(acesLeft).toEqual(2);
    expect(cardsLeft).toEqual(8);
  });

  it('after calling makeDeal method 2 times provides expected values', async () => {
    callMakeDeal();
    callMakeDeal();

    expect(deal).toHaveLength(5);
    expect(deal).toEqual(secondDealCards);
    expect(acesLeft).toEqual(1);
    expect(cardsLeft).toEqual(3);
  });

  it('after calling makeDeal method 3 times provides expected values', async () => {
    callMakeDeal();
    callMakeDeal();
    callMakeDeal();

    expect(deal).toHaveLength(3);
    expect(deal).toEqual(thirdDealCards);
    expect(acesLeft).toEqual(0);
    expect(cardsLeft).toEqual(0);
  });

  it('after calling makeDeal and then reset provides starting values', async () => {
    callMakeDeal();
    act(() => {
      reset();
    });
    expect(deal).toHaveLength(0);
    expect(deal).toEqual([]);
    expect(acesLeft).toEqual(4);
    expect(cardsLeft).toEqual(13);
  });
});
