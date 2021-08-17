import react, { useState } from 'react';
import dados from './dados.json';
import styles from './index.module.css';
import RankItem from '../componentes/RankItem.js';
import { waitForDebugger } from 'inspector';

export default function Home() {
  const [list, setList] = useState(dados);

  function handleFilterByGold() {
    const filteredList = [...list].filter(x => item.GoldMedals > 0);
  }
  return (
    <div>
      <h1 className="title"> Quadro de medalhas - Tóquio 2020 </h1>
      <div>
        <button> Somente com Ouro </button>
        <button> todos </button>
      </div>
      <div> Resultado: {list.length}itens</div>
      <div>
        <div className={styles.header}>
          <div> # </div>
          <div> Time </div>
          <div> Ouro </div>
          <div> Prata </div>
          <div> Bronze </div>
          <div> Total </div>
        </div>
        {list.map(item => {
          return <RankItem item={item} />;
        })}
      </div>
    </div>
  );
}
