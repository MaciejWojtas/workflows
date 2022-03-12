import React, { FunctionComponent } from 'react';
import Confetti from 'react-confetti';
import { ReactComponent as Winner } from '../../assets/img/winner.svg';
import useCardDeck from '../../hooks/useCardDeck';
import Card from './Card/Card';
import Counter from './Counter/Counter';
import styles from './CardGame.module.css';

const CardGame: FunctionComponent = () => {
  const { deal, makeDeal, reset, cardsLeft, acesLeft } = useCardDeck();

  const win = cardsLeft === 0 && acesLeft === 0;
  const loss = cardsLeft !== 0 && acesLeft === 0;
  const hasEndedGame = loss || win;

  return (
    <div className={styles.game}>
      {win ? <Confetti gravity={0.5} numberOfPieces={100} recycle={false} /> : null}
      {win ? (
        <div className={styles['game-win']}>
          <Winner />
        </div>
      ) : null}
      <div className={styles['game-counter']}>
        <Counter cardsLeft={cardsLeft} acesLeft={acesLeft} />
      </div>
      <div className={styles['game-cards']}>
        <div className={styles['game-cards__container']}>
          {deal.map((card, index) => (
            <Card
              className={`${styles['game-cards__card']} ${
                deal.length === 5 ? styles[`game-cards__card-${index}`] : ''
              }`}
              key={`${card.rank} ${card.suit}`}
              card={card}
            />
          ))}
        </div>
      </div>

      <div className={`${styles['game-deal']}`}>
        {loss ? (
          <span className={`${styles['game-lose']} font-secondary`}>
            You lose.
            <br /> Better luck next time!
          </span>
        ) : null}
        {hasEndedGame ? (
          <button
            className={`${styles['game-reset-btn']} btn-secondary`}
            type="button"
            onClick={reset}
          >
            Play Again
          </button>
        ) : (
          <button
            className={`${styles['game-deal__button']} btn-primary`}
            type="button"
            onClick={makeDeal}
          >
            Deal
          </button>
        )}
      </div>
      {hasEndedGame ? null : (
        <div className={styles['game-reset']}>
          <button
            className={`${styles['game-reset-btn']} ${styles['game-reset__button']} btn-secondary`}
            type="button"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
};

export default CardGame;
