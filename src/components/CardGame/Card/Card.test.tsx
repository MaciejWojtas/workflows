import React from 'react';
import renderer from 'react-test-renderer';
import { cloverCard, diamondCard, heartCard, spadeCard } from '../../../tests/mocks/cards';
import Card from './Card';

it('renders correctly with Clover card', () => {
  const tree = renderer.create(<Card card={cloverCard} />).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders correctly with Heart card', () => {
  const tree = renderer.create(<Card card={heartCard} />).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders correctly with Spade card', () => {
  const tree = renderer.create(<Card card={spadeCard} />).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders correctly with Diamond card', () => {
  const tree = renderer.create(<Card card={diamondCard} />).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders correctly with Class Name', () => {
  const tree = renderer.create(<Card className="class-name" card={diamondCard} />).toJSON();

  expect(tree).toMatchSnapshot();
});
