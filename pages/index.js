import dados from './dados.json';
import styles from './index.module.css';
import RankItem from '../componentes/RankItem.js';

export default function Home() {
  return (
    <div>
      <h1 class="title"> Quadro de medalhas - Tóquio 2020 </h1>
      <div>
        <div className={styles.header}>
          <div> # </div>
          <div> Time </div>
          <div> Ouro </div>
          <div> Prata </div>
          <div> Bronze </div>
          <div> Total </div>
        </div>
        {dados.map(item => {
          return <RankItem item={item} />;
        })}
      </div>
    </div>
  );
}
