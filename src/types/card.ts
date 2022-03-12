export const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'] as const;
export const suits = ['C', 'D', 'H', 'S'] as const;

export type CardRank = typeof ranks[number];
export type CardSuit = typeof suits[number];

export type Card = {
  rank: CardRank;
  suit: CardSuit;
};
