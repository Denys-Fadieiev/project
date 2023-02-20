import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import prices from './RecomendedList/recomendedList';
import styles from './Recommended.module.sass';

const { wrapperRecomend, wrapperHelp, cardList, article, figure, btn } = styles;

const Recommended = () => {
  return (
    <div>
      <Header />
      <>
        <div className={wrapperRecomend}>
          <h1>Recommended For You</h1>
          <p>Personalized recommendations based upon your browsing behavior</p>
        </div>
        <div className={wrapperHelp}>
          <h2>Need More Help?</h2>
          <ul className={cardList}>
            {prices.map((card, index) => (
              <li key={index}>
                <article className={article}>
                  <div>
                    <figure className={figure}>
                      <img src={card.iconSrc} alt={card.title} />
                    </figure>
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                  </div>
                  <Link to="/" className={btn}>
                    {card.btn}
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </>
      <Footer />
    </div>
  );
};

export default Recommended;
