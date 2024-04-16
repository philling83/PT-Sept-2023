import { useState } from "react"

const useTextInput = ({validations = [], defaultValue = '', type=''}) => {
    const [value, setValue] = useState(defaultValue);

    // console.log('validations', validations)

    const handleInput = e => {
        if (e) {
            setValue(e.target.value);
        }
        else {
            setValue('')
        }
    }

    const validatorResults = validations.map((validator) => validator(value, type));

    const failedValidations = validatorResults.filter((valObj) => !valObj.pass);

    const errors = failedValidations.map(valObj => valObj.message);


    return [value, handleInput, errors]

}

export default useTextInput
