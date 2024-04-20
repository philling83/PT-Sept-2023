import { useParams } from "react-router-dom";

function FruitShow({ fruits }) {
  const { fruitId } = useParams();
  const fruit = fruits.find(el => el.id === fruitId);

  // console.log(fruit)
  return (
    <>
      <h2>{fruit.name}</h2>
      <div>{fruit.color}</div>
      <div>{`Sweetness: ${fruit.sweetness}`}</div>
      <div>{`Seeds: ${fruit.seeds}`}</div>
    </>
  )
}

export default FruitShow;
