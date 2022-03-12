import React from 'react';
import CardGame from './components/CardGame/CardGame';
import styles from './App.module.css';

const App: React.FC = () => {
  return (
    <div className={styles.body}>
      <div className={styles['body-inner']}>
        <CardGame />
      </div>
    </div>
  );
};

export default App;
