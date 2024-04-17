import { useState } from "react";

export const useTextInput = ({ validations = [], defaultValue = '' }) => {
    const [value, setValue] = useState(defaultValue);

    const handleInput = e => {
        setValue(e.target.value);
    }

    const validatorResults = validations.map((validator) => validator(value));
    const failedValidators = validatorResults.filter((validationObj) => !validationObj.pass);
    const errors = failedValidators.map((validationObj) => validationObj.msg);

    return [value, handleInput, errors];
};
