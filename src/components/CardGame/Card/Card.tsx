import { FunctionComponent } from 'react';
import { getSuitImage, isRedCard } from '../../../helpers/card';
import { Card as CardType } from '../../../types/card';
import styles from './Card.module.css';

type CardProps = {
  card: CardType;
  className?: string;
};

const Card: FunctionComponent<CardProps> = ({ card, className }) => {
  const Image = getSuitImage(card);

  return (
    <div className={`${styles.card} ${className || ''}`}>
      <div className={styles['card-desc']}>
        <span
          className={`${styles['card-desc__rank']} ${
            isRedCard(card) ? styles['card-desc__rank--red'] : ''
          }`}
        >
          {card.rank}
        </span>
        <Image className={styles['card-desc__img']} />
      </div>
      <div className={styles['card-suit']}>
        <Image className={styles['card-suit__img']} />
      </div>
    </div>
  );
};

export default Card;
