import { Link } from "react-router-dom";

function FruitsIndex({ fruits }) {
  return (
    <>
      <h2>Fruits Index</h2>
      {
        fruits.map(el => (<Link key={el.id} to={`/fruits/${el.id}`}>{el.name}</Link>))
      }
    </>
  )
}

export default FruitsIndex;
