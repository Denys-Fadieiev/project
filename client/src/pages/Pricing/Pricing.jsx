import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import prices from './pricingList.json';
import styles from './Pricing.module.sass';

function Pricing() {
  return (
    <div>
      <Header />
      <>
        <ul className={styles.container}>
          {prices.map((p) => (
            <li>
              <article>
                <div style={{ border: `10px solid ${p.color}` }} className={styles.topBox}>
                  <h3 style={{ color: p.color }}>{p.type}</h3>
                  <p>{p.describeType}</p>
                  <span style={{ color: p.color }}>{p.price}</span>
                </div>
                <div>
                  {p.profit.map((profit) => (
                    <p 
                      className={styles.body} 
                      data-tooltip={profit.tooltip}>
                      {profit.body}
                    </p>
                  ))}
                </div>
                <Link 
                  to="/startContest" 
                  style={{ backgroundColor: p.color }}
                  className={styles.btn}
                >
                  Start
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </>
      <Footer />
    </div>
  );
}

export default Pricing;
