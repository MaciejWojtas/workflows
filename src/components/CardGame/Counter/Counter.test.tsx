import React from 'react';
import renderer from 'react-test-renderer';
import Counter from './Counter';

it('renders correctly without class name', () => {
  const tree = renderer.create(<Counter cardsLeft={2} acesLeft={4} />).toJSON();

  expect(tree).toMatchSnapshot();
});
