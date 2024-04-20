import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const COLORS = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple"
];

function FruitForm({ fruits }) {

  const [name, setName] = useState('');
  const [sweetness, setSweetness] = useState(1);
  const [seeds, setSeeds] = useState('yes');
  const [color, setColor] = useState('orange');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  
  useEffect(() => {
    const errors = {};

    if (name.length < 3) errors.minName = 'Name must be 3 or more characters';
    if (name.length > 20) errors.maxName = 'Name must be 20 characters or less';
    if (fruits.find(el => el.name === name)) errors.exists = 'Name already exists';
    if (sweetness < 1 || sweetness > 10) errors.sweet = 'Sweetness must be between 1 and 10';

    setErrors(errors);

  }, [name, sweetness, seeds, color])

  const handleSubmit = e => {
    e.preventDefault();

    const fruitObj = {
      name,
      sweetness,
      seeds,
      color
    }

    console.log(fruitObj);
    navigate('/');
  }


  return (
    <form
      className="fruit-form"
      onSubmit={handleSubmit}
    >
      <h2>Enter a Fruit</h2>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        {errors.minName && <p className="errors">{errors.minName}</p>}
        {errors.maxName && <p className="errors">{errors.maxName}</p>}
        {errors.exists && <p className="errors">{errors.exists}</p>}
      </label>
      <label>
        Select a Color
        <select
          value={color}
          onChange={e => setColor(e.target.value)}
        >
          {COLORS.map(color => (
            <option
              key={color}
              value={color}
            >
              {color}
            </option>
          ))}
        </select>
      </label>
      <label>
        Sweetness
        <input
          type="number"
          name="sweetness"
          value={sweetness}
          onChange={e => setSweetness(e.target.value)}
        />
        {errors.sweet && <p className="errors">{errors.sweet}</p>}
      </label>
      <label>
        <input
          type="radio"
          value="no"
          name="seeds"
          onChange={e => setSeeds(e.target.value)}
        />
        No Seeds
      </label>
      <label>
        <input
          type="radio"
          value="yes"
          name="seeds"
          defaultChecked
          onChange={e => setSeeds(e.target.value)}
        />
        Seeds
      </label>
      <button
        type="submit"
        disabled={Object.keys(errors).length > 0}
      >
        Submit Fruit
      </button>
    </form>
  );
}

export default FruitForm;
