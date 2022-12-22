import React, { useState } from "react";
import arrow from '../../../../../img/header/Vector.svg';
import './emailinput.css'

const EmailInput = () => {
    const [value, setValue] = useState('');
    const [submit, setSubmit] = useState('');
    const [error, setError] = useState('');

    const handleInput: React.ChangeEventHandler<HTMLInputElement> = (e: any) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setSubmit(value);
        if (value === '') {
            setError('Email is required!');
        }
    }
    return (
        <form action="" className="form" onSubmit={handleSubmit}>
            <div className="form-content__title">Ready to watch? Enter your email to create or restart your membership.</div>
            <div className='form-content__body'>
                <div className="form-item">
                    <input type="email" id='email' className='form-content__input head' onChange={handleInput} />
                    {value !== ''
                        ?
                        <label htmlFor="email" style={{ top: '4px', fontWeight: '700' }} className='label-email'>Email address</label>
                        :
                        <label htmlFor="email" className='label-email'>Email address</label>
                    }
                    <div className="error-email">{error}</div>
                </div>
                <button type='submit' className='form-content__btn'>Get Started <img src={arrow} alt="" /></button>
            </div>
        </form>
    )
}

export default EmailInput;

