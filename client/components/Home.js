import React, { useEffect, useState } from "react";
import {useHistory} from 'react-router-dom'
import { useSelector } from "react-redux";

const totalFruitVeg = 20;

export const Home = () => {
  const username = useSelector(state => state.auth.username);
  const history = useHistory();

  const [current, setCurrent] = useState(null);
  const [result, setResult] = useState(null);
  const [timerId, setTimerId] = useState(null)

  const fruitsAndVeg = [];

  for (let i = 1; i <= totalFruitVeg; i++) {
    if (i < 11) {
      fruitsAndVeg.push(`fruit/fruit${i}.jpeg`);
    } else {
      fruitsAndVeg.push(`vegetable/veg${i - 10}.jpeg`);
    }
  }

  const index = () => Math.floor(Math.random() * (19 - 0) + 0);

  useEffect(() => {
    setCurrent(fruitsAndVeg[index()]);

    return () => {
      clearTimeout(timerId)
    }
  }, []);

  const handleClick = evt => {
    if (current.includes(evt.target.value) && result !== "Good Job!!") {
      setResult("Good Job!!");

      const currentId = setTimeout(() => {
        setTimerId(currentId);

        setResult(null);
        setCurrent(fruitsAndVeg[index()]);
      }, 2000);
    } else if (result !== "Good Job!!") {
      setResult("Try Again!!");
    }
  };

  return (
    <div className="game">
      <div className="game">
        <h2>Welcome, {username}</h2>
        <h3>Fruit or Vegetable!!</h3>
      </div>

      <div className="game">
        <img src={current} />
        <div>
          <button value="fruit" onClick={handleClick}>
            Fruit
          </button>
          <button value="veg" onClick={handleClick}>
            Vegetable
          </button>
        </div>
        <div className="result">{result ? <div>{result}</div> : null}</div>
      </div>
    </div>
  );
};

export default Home;
