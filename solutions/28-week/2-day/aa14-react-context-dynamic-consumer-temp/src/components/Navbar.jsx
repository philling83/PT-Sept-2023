import horoscopesObj from '../data/horoscopes';
import { useContext } from 'react';
import { HoroscopeContext } from '../context/HoroscopeContext'


const Navbar = () => {
  const { setCurrentSign } = useContext(HoroscopeContext);
  const horoscopes = Object.keys(horoscopesObj);
  console.log('Rendering Nav')

  return (
    <nav>
      {horoscopes.map(sign => (
        <span key={sign} onClick={e => setCurrentSign(e.target.innerText)}>
          {sign}
        </span>
      ))}
    </nav>
  )
};

export default Navbar;
