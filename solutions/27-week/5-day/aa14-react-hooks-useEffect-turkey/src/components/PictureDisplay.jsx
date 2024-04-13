import turkey from '../images/turkey.png';
import feather1 from '../images/feather1.svg';
import feather2 from '../images/feather2.svg';
import feather3 from '../images/feather3.svg';
import feather4 from '../images/feather4.svg';
import feather5 from '../images/feather5.svg';
import feather6 from '../images/feather6.svg';
import feather7 from '../images/feather7.svg';
import feather8 from '../images/feather8.svg';
import feather9 from '../images/feather9.svg';
import featherA from '../images/featherA.svg';
import { useEffect, useState } from 'react';

const feathers = [
  feather1,
  feather2,
  feather3,
  feather4,
  feather5,
  feather6,
  feather7,
  feather8,
  feather9,
  featherA,
];

function PictureDisplay({ size, featherCount, featherColors }) {
  // const [sizeClass, setSizeClass] = useState(size);
  const [colors, setColors] = useState([]);

  // useEffect(() => {
  //   console.log('PictureDisplay Size', size);
  //   const cName = {
  //     's': 'small',
  //     'm': 'medium',
  //     'l': 'large',
  //     'xl': 'xlarge'
  //   }

  //   // console.log(cName[size]);
  //   setSizeClass(cName[size]);

  // }, [size])

  useEffect(() => {
    console.log('PictureDisplay Feather Count', featherCount);
  }, [featherCount])

  useEffect(() => {
    console.log('PictureDisplay Feather Colors', featherColors);

  }, [featherColors])


  useEffect(() => {
      // TODO: Wrap in useEffect
      const colors = [];
      if (!featherColors || featherColors.length === 0) featherColors = [''];
      for (let i=0; i<featherCount; i++) {
        colors.push(featherColors[i % featherColors.length]);
      }

    setColors(colors);

  }, [featherColors, featherCount])

  return (
    <div className={`image-area ${size}`}>
      {colors.map((c, i) =>
        <img
          key={feathers[i]}
          src={feathers[i]}
          className={`image-feather ${c}`}
          alt=""
        />
      )}

      <img src={turkey} className="image-turkey" alt="turkey" />
    </div>
  );
}

export default PictureDisplay;
