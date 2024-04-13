import { useState, useEffect } from 'react';
import Message from './components/Message';
import PictureDisplay from './components/PictureDisplay';

function App() {
  const [size, setSize] = useState('s');
  const [sizeClass, setSizeClass] = useState(size);
  const [featherCount, setFeatherCount] = useState(0);
  const [featherColors, setFeatherColors] = useState([]);
  const [isRed, setIsRed] = useState(false);
  const [isOrange, setIsOrange] = useState(false);
  const [isBrown, setIsBrown] = useState(false);
  const [isLightBrown, setIsLightBrown] = useState(false);
  const [isYellow, setIsYellow] = useState(false);


  useEffect(() => {
    console.log('Size', size);
    const cName = {
      's': 'small',
      'm': 'medium',
      'l': 'large',
      'xl': 'xlarge'
    }

    // console.log(cName[size]);
    setSizeClass(cName[size]);

  }, [sizeClass, size])


  useEffect(() => {
    const colors = [
      {
        color: 'red',
        state: isRed
      },
      {
        color: 'orange',
        state: isOrange
      },
      {
        color: 'brown',
        state: isBrown
      },
      {
        color: 'light-brown',
        state: isLightBrown
      },
      {
        color: 'yellow',
        state: isYellow
      }
    ]
    const newColors = []
    colors.forEach(el => {
      // console.log(`Color Change :: ${el.color}?`, el.state);
      if (el.state) newColors.push(el.color);
    })

    setFeatherColors(newColors);

  },[isRed, isOrange, isBrown, isLightBrown, isYellow])

  return (
    <>
      <h1>Turkey Creator</h1>
      <h3 className="button-controls">Set the features of your turkey</h3>

      {/* User controls */}
      <div className="button-controls">
        Size:
        <button onClick={() => setSize('s')}>Small</button>
        <button onClick={() => setSize('m')}>Medium</button>
        <button onClick={() => setSize('l')}>Large</button>
        <button onClick={() => setSize('xl')}>X-Large</button>
      </div>
      <div className="button-controls">
        Feather Count:
        <input
          type="number"
          onChange={(e) => setFeatherCount(e.currentTarget.value)}
          defaultValue={0}
          min={0}
          max={10}
        />
      </div>
      <div className="button-controls">
        Feather Color(s):
        <label><input
          type="checkbox"
          onChange={(e) => setIsRed(e.currentTarget.checked)}
        />Red</label>
        <label><input
          type="checkbox"
          onChange={(e) => setIsOrange(e.currentTarget.checked)}
        />Orange</label>
        <label><input
          type="checkbox"
          onChange={(e) => setIsBrown(e.currentTarget.checked)}
        />Brown</label>
        <label><input
          type="checkbox"
          onChange={(e) => setIsLightBrown(e.currentTarget.checked)}
        />Light Brown</label>
        <label><input
          type="checkbox"
          onChange={(e) => setIsYellow(e.currentTarget.checked)}
        />Golden Yellow</label>
      </div>

      {/* Generated display based on user selections above */}
      <h3 className="button-controls">Enjoy your turkey</h3>
      <PictureDisplay
        size={sizeClass}
        featherCount={featherCount}
        featherColors={featherColors}
      />
      <Message size={sizeClass} featherCount={featherCount} />
    </>
  );
}

export default App;
