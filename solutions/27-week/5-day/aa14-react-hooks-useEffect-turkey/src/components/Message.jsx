
import { useEffect, useState } from "react";

function Message({ size, featherCount }) {

  // const [sizeClass, setSizeClass] = useState(size);
  const [message, setMessage] = useState('');

  // useEffect(() => {
  //   console.log('Message Size', size);
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
    if (featherCount <= 0) {
      setMessage('Oh my! Your bird is naked!')
    }
    else if (featherCount >= 10) {
      setMessage('Full turkey!');
    }
    else {
      setMessage('Coming along..')
    }
  }, [featherCount])


  return (
    <div className={`message ${size}`} >
      {message}
    </div>
  );


}

export default Message;
