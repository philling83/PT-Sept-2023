import './SingleArticle.css';
//!get use Parameters
import { useParams } from 'react-router-dom';
//!get useSelector
import { useSelector } from 'react-redux';

const SingleArticle = () => {
  //! grab article's id
  const { id } = useParams();
  //! subscribe to artcileState
  const articles = useSelector(state => state.articleState.entries);
  //! find specific article
  const article = articles.find(el => el.id === id);

  return (
    <div className='singleArticle'>
      <h1>{article.title}</h1>
      <img
        src={article.imageUrl}
        alt={article.title}
      />
      <p>
        {article.body}
      </p>
    </div>
  );
};

export default SingleArticle;
