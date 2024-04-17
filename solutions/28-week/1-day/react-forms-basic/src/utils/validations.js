
export const lengthVal = (value, type) => {
    const res = {
        pass: true,
        message: `${type} cannot be empty!`
    }
    if (value.length <= 0) {
        res.pass = false;
    }

    if (type === 'bio' && value.length > 280) {
        res.pass = false;
        res.message = `${type} has a limit of 280 characters`
    }

    return res
}

export const emailVal = (value) => {
    const res = {
        pass: true,
        message: `Must be a valid Email!`
    }

    if (!value.split('').includes('@')) res.pass = false;

    return res
}

export const phoneVal = (value) => {
    const res = {
        pass: true,
        message: 'Phone number is not formatted correctly!'
    }

    const numArr = value.split('-');

    if (numArr.length !== 3) {
        res.pass = false;
        res.message = 'Phone number not seperated by dashes correctly!'
        return res
        // console.log('error with length of split array')
    }

    numArr.forEach(batch => {
        if (isNaN(Number(batch))) {
            res.pass = false;
            // console.log('error with string not converting to number')
            res.message = 'Phone number has non numeric characters!'
        }
    })

    // console.log(numArr[0].length)
    if ((numArr[0].length !== 3) || (numArr[1].length !== 3) || (numArr[2].length !== 4)) {
        res.pass = false;
        res.message = 'phone number not correct length!'
    }

    return res
}
