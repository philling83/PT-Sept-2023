import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import COLORS from './data/colors.json';
import VALID_STATUS_CODES from './data/validStatusCodes.json';

const Cat = () => {
  const navigate = useNavigate();
  const [colorIdx, setColorIdx] = useState(0);
  const [delayChange, setDelayChange] = useState(5000);
  const [statusChange, setStatusChange] = useState(localStorage.getItem('status') ? localStorage.getItem('status') : '418');
  const [delay, setDelay] = useState('');
  const [status, setStatus] = useState('');


  useEffect(() => {
    const colorInterval = setInterval(() => {
      setColorIdx((prevIdx) => {
        const newIdx = ++prevIdx % COLORS.length;
        return newIdx
      })
    }, delayChange)

    return () => clearInterval(colorInterval)
  }, [delayChange])

  useEffect(() => {
    localStorage.setItem('status', statusChange);
  }, [statusChange])

  useEffect(() => {
    const activityTimer = setTimeout(() => {
      setStatusChange('418');
    }, 600000 )

    return () => clearTimeout(activityTimer);

  }, [delay, status])


  const handleDelaySubmit = (e) => {
    e.preventDefault();

    if (delay < 1 || delay > 10) {
      alert('Please enter a delay from 1 through 10!');
      return;
    }

    setDelayChange(Number(delay) * 1000);
    setDelay('');
  };

  const handleStatusSubmit = (e) => {
    e.preventDefault();

    if (status === '') {
      alert('Please Enter A Code');
      setStatusChange(404);
      return;
    }

    if (!VALID_STATUS_CODES.includes(Number(status))) {
      alert(
        `Code ${status} might exist, but it is not a proper Cat Status code.`
      );
      setStatusChange(404);
      return;
    }

    setStatusChange(status);
    setStatus('');
  };

  return (
    <div
      className="cat-container"
      style={{
        backgroundColor: COLORS[colorIdx],
        transition: 'background-color 1s',
      }}
    >
      <h1>Cat Status</h1>
      <button onClick={() => navigate('/')}>Home</button>
      <div className="image-container">
        <img
          src={`https://http.cat/${statusChange}`}
          alt="404" // Tests will fail if you change `alt`
        />
      </div>
      <form onSubmit={handleDelaySubmit}>
        <label htmlFor="dStatus">
          <input
            type="number"
            id="dStatus"
            onChange={(e) => {
              setDelay(e.target.value)
            }}
            placeholder="delay in seconds"
            value={delay}
            max={10}
            min={1}
          />
        </label>
        <button type="submit">Change Delay</button>
      </form>
      <div>Current Delay Time between color changes: {delay} seconds</div>
      <form onSubmit={handleStatusSubmit}>
        <label htmlFor="cStatus">
          <input
            type="number"
            id="cStatus"
            onChange={(e) => setStatus(e.target.value)}
            placeholder="find new status"
            value={status}
            max={599}
            min={100}
          />
        </label>
        <button type="submit">Change Status</button>
      </form>
    </div>
  );
};

export default Cat;
