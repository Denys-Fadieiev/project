import React from 'react';
import QuestionAnswersItemData from './QuestionsAnswer.Data';

const QuestionsAnswer = (props) => {
  const { articlesMainContainer, ColumnContainer, headerArticle, article } =
    props;

  return (
    <div className={articlesMainContainer}>
      {QuestionAnswersItemData.map((c) => (
          <div className={ColumnContainer}>
            {c.map((qa) => (
              <>
                <p className={headerArticle}>{qa.question}</p>
                <p className={article}>{qa.answer}</p>
              </>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default QuestionsAnswer;
