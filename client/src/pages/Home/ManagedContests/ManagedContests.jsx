import React from 'react';
import managedContestsCards from './managedContests';
import styles from './ManagedContests.module.sass';

const { ManagedContestsBlock, ManagedContestsItem, ManagedContestsList, managedContestArticle } = styles;

const ManagedContests = () => {
  return (
    <>
      <div className={ManagedContestsBlock}>
        <div className={ManagedContestsItem}>
          <h2>Managed Contests</h2>
          <p>
            Better than a naming agency: Our hybrid-solution partners you with a
            trained Squadhelp branding consultant who will guide your
            crowdsourcing process step-by-step to get the best results possible.
          </p>
        </div>
        <ul className={ManagedContestsList}>
          {managedContestsCards.map((card, index) => (
            <li key={index}>
              <article className={managedContestArticle}>
                <img src={card.iconSrc} alt={card.title} />
                <h3>
                  {card.title}
                </h3>
                <p>{card.body}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ManagedContests;
