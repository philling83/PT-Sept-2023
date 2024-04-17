// import { useState } from 'react';
import { textInputValidators } from '../utils/validations';
import { useTextInput } from '../hooks/textInput.js'
import { useEffect } from 'react';


const emailValidator = (value) => {
  const res = {
    pass: true,
    msg: 'Must be a valid Email.'
  }
  if (!value.includes('@')) {
    res.pass = false;
  }

  return res;
}
const Form = () => {
  // const [name, setName] = useState('');

  // const validatorResults = textInputValidators.map((validator) => validator(name));
  // const failedValidators = validatorResults.filter((validationObj) => !validationObj.pass);
  // const nameErrors = failedValidators.map((validationObj) => validationObj.msg);

  const [name, setName, nameErrors] = useTextInput({ validations: textInputValidators });
  const [email, setEmail, emailErrors] = useTextInput({validations:[textInputValidators[0], emailValidator]})

  useEffect(() => {
    // console.log(nameErrors)
  },[name, nameErrors])

  return (
    <>
      <h1>Form Component</h1>
      <form>
        <ul>
          {nameErrors.map(err => <li key={err}>{err}</li>)}
          {emailErrors.map(err => <li key={err}>{err}</li>)}
        </ul>
        <label htmlFor="name">
          Name{" "}
          <input
            id="name"
            value={name}
            onChange={setName}
          />
        </label>
        Email{" "}
        <label htmlFor='email'>
          <input id='email' value={email} onChange={setEmail} />
        </label>
      </form>
    </>
  );
};

export default Form;
