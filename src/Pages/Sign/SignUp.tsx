import './signin.css'
import logo from '../../img/header/Logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
// import { setUser } from '../../store/slices/userSlice';
import { useDispatch } from 'react-redux';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';



const SignUp = () => {
    const [valueEmail, setValueEmail] = useState('');
    const [valuePass, setValuePass] = useState('');
    const push  = useNavigate();

    const handleInputEmail: React.ChangeEventHandler<HTMLInputElement> = (e: any) => {
        setValueEmail(e.target.value)
    }

    const handleInputPass: React.ChangeEventHandler<HTMLInputElement> = (e: any) => {
        setValuePass(e.target.value)
    }

    const dispatch = useDispatch();

    const handleRegister = (email: string, password: string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                push('/films');
            })
            .catch(console.error)
    }

    return (
        <section className="sign-in">
            <div className="background" />
            <div className="sign-in__container">
                <header>
                    <Link to="/" className="header-logo"><img src={logo} alt="" /></Link>
                </header>
                <div className="sign-in__content">
                    <div className="sign-in-content__form">
                        <div className="form-content__title sign">Sign Up</div>
                        <div className="input-item">
                            <input type="email" className='form-content__input sign' id="email" onChange={handleInputEmail} />
                            {valueEmail !== ''
                                ?
                                <label htmlFor="email" className='form-content__label' style={{ top: '7px', fontSize: '11px' }}>Email</label>
                                :
                                <label htmlFor="email" className='form-content__label'>Email</label>
                            }
                        </div>
                        <div className="input-item">
                            <input type="password" className='form-content__input sign' id="pass" onChange={handleInputPass} required />
                            {valuePass !== ''
                                ?
                                <label htmlFor="pass" className='form-content__label' style={{ top: '7px', fontSize: '11px' }}>Password</label>
                                :
                                <label htmlFor="pass" className='form-content__label'>Password</label>
                            }
                        </div>
                        {valuePass !== '' && (valuePass.length < 6 && <div className='error-pass'>Error, password should be at least 6 characters</div>)}
                        <button className='form-content__button' onClick={() => handleRegister(valueEmail, valuePass)}>Sign Up</button>
                        <div className="form-content__down">
                            <a href="" className='form-content__help'>Need help?</a>
                        </div>
                        <div className="form-down__text">
                            <div className="down-text-content__signup">
                                A have account? <Link to='/signin'>Sign in now</Link>.
                            </div>
                            <div className="down-text-content__learn">This page is protected by Google reCAPTCHA to ensure you're not a bot. <span>Learn more.</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUp;