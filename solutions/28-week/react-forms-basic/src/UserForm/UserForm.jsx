import { useEffect, useState } from "react"
import useTextInput from "../hooks/useTextInput";
import './UserForm.css'

import { lengthVal, emailVal, phoneVal } from "../utils/validations";


const UserForm = () => {
    const [name, setName, nameErrors] = useTextInput({validations: [lengthVal], type:'name'});
    const [email, setEmail, emailErrors] = useTextInput({ validations: [lengthVal, emailVal], type: 'email' });
    const [phone, setPhone, phoneErrors] = useTextInput({ validations: [phoneVal] });
    const [phoneTypeError, setPhoneTypeError] = useState('')
    const [phoneType, setPhoneType] = useTextInput({});
    const [role, setRole] = useState('instructor');
    const [bio, setBio, bioErrors] = useTextInput({validations: [lengthVal], type:'bio'});
    const [notify, setNotify] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if (phone && !phoneType) {
            setPhoneTypeError('You must select a phone Type');
        }
        else {
            setPhoneTypeError('');
        }

    }, [phoneType, phone, phoneErrors])

    useEffect(() => {
        console.log(nameErrors, emailErrors, phoneErrors, bioErrors);
    }, [nameErrors, emailErrors, phoneErrors, bioErrors])

    const handleSubmit = e => {
        e.preventDefault();
        const submitObj = {
            name,
            email,
            phone,
            phoneType,
            role,
            bio,
            notify
        }
        console.log(submitObj)

        if (nameErrors.length > 0 || emailErrors.length > 0 || phoneErrors.length > 0 || bioErrors.length > 0) {
            window.alert('Your form has Errors.')
        }
        else {
            window.alert('Sending Form data to backend API')
            setName('');
            setEmail('');
            setPhone('');
            setPhoneType('');
            setBio('');
            setRole('instructor');
            setNotify(false);
        }


        setSubmitted(true);
    }

    const handleRole = (e) => {
        setRole(e.target.value)

    }

    const handleNotify = e => {
        setNotify(!notify);

    }

    return (
        <form onSubmit={handleSubmit} className="main-form">

            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={name} onChange={setName}/>
            <div className="error">
                {submitted && nameErrors.length > 0 && nameErrors.map(err => (<div key={err}>{err}</div>))}
            </div>

            <label htmlFor="email">Email</label>
            <input type="text" id="email" value={email} onChange={setEmail} />

            <div className="error">
                {submitted && emailErrors.length > 0 && emailErrors.map(err => (<div key={err}>{err}</div>))}
            </div>

            <label htmlFor="phone">Phone</label>
            <input placeholder="xxx-xxx-xxxx" type='text' id="phone" value={phone} onChange={setPhone}/>
            <select
                name="phoneType"
                value={phoneType}
                onChange={setPhoneType}
                disabled={phone.length>0 ? false : true}
            >
                <option value={''} disabled>
                    Select a phone type...
                </option>
                <option>
                    Home
                </option>
                <option>
                    Work
                </option>
                <option>
                    Mobile
                </option>
            </select>
            <div className="error">
                {submitted && phoneErrors.length > 0 && phoneErrors.map(err => (<div key={err}>{err}</div>))}
                {submitted && phoneTypeError && <div>{phoneTypeError}</div>}
            </div>

            <div className="radio-role">
                <label htmlFor="inst-role">Instructor</label>
                <input id='inst-role' checked={role === 'instructor'}type="radio" name="role" value={'instructor'} onChange={handleRole}/>

                <label htmlFor="stu-role">Student</label>
                <input id='stu-role' type="radio" name="role" value={'student'} onChange={handleRole}/>
            </div>

            <label htmlFor='bio'>Bio</label>
            <textarea id='bio' name="bio" value={bio} onChange={setBio} />
            <div className="error">
                {submitted && bioErrors.length > 0 && bioErrors.map(err => (<div key={err}>{err}</div>))}
            </div>
            <div>
                <label htmlFor='notifications'>Email Notifications</label>
                <input id='notifications' type='checkbox' checked={notify} onChange={handleNotify}/>
            </div>

            <button>
                Submit
            </button>

        </form>
    )
}

export default UserForm
