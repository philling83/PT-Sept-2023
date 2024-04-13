import { useNavigate } from 'react-router-dom';

const Unmounted = () => {
  const navigate = useNavigate();
  return (
    <div className='unmounted'>
      <h1>Welcome</h1>
      <button onClick={() => navigate('/mount')}>Login</button>
    </div>
  );
};

export default Unmounted;
