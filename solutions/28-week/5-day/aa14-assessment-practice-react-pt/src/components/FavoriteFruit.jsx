import { useFruit } from "../context/FavFruitContext";
import { Link } from "react-router-dom";

const FavoriteFruit = ({ fruits }) => {
  const { favFruitId } = useFruit();
  const fruit = fruits.find(el => el.id === favFruitId);

  return (
    <>
      <h2>
        Favorite Fruit
      </h2>
      <Link to={`/fruits/${favFruitId}`}>{fruit.name}</Link>
    </>
  )
}

export default FavoriteFruit;
