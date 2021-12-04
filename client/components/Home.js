import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

/**
 * COMPONENT
 */
export const Home = props => {
  const { username } = props;

  const [current, setCurrent] = useState(null)
  const [result, setResult] = useState(null)

  const ricksAndSticks = {
    1: "rick1.jpeg",
    2: "rick2.jpeg",
    3: "rick3.jpeg",
    4: "rick4.jpeg",
    5: "stick1.webp",
    6: "stick2.jpg",
    7: "stick3.jpeg",
    8: "stick4.jpeg",
  };

  const index = () => Math.floor(Math.random() * (9 - 1) + 1);

  useEffect(() => {
    setCurrent(ricksAndSticks[index()])
  }, [])

  const handleClick = (evt) => {
    if (current.includes(evt.target.value)) {
      setResult("Good Job!!")

      setTimeout(() => {
        setResult(null)
        setCurrent(ricksAndSticks[index()])
      }, 3000)
    } else {
      setResult("Try Again!!")
    }
  }

  return (
    <div>
      <h2>Welcome, {username}</h2>
      <h3>Rick or Stick!!</h3>

      <img src={current} />
      <div>
        <button value ='rick' onClick={handleClick}>Rick</button>
        <button value ='stick' onClick={handleClick}>Stick</button>
      </div>
      <div>
        {result ? <div>{result}</div> : null}
      </div>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    username: state.auth.username,
  };
};

export default connect(mapState)(Home);
