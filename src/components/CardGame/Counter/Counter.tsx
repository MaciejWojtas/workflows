import React, { FunctionComponent } from 'react';
import styles from './Counter.module.css';

type CardGameProps = {
  cardsLeft: number;
  acesLeft: number;
};

const Counter: FunctionComponent<CardGameProps> = ({ cardsLeft, acesLeft }) => {
  return (
    <div className={styles.counter}>
      <span className={`${styles.counter__number} font-secondary`}>{cardsLeft}</span>
      <span className={`${styles.counter__text} font-secondary`}>Cards Left</span>
      <div className={`${styles['counter-aces']} font-secondary`}>
        {[...Array(acesLeft)].map((_, i) => (
          <span className={styles['counter-aces__ace']} key={i}>
            A
          </span>
        ))}
      </div>
    </div>
  );
};

export default Counter;
