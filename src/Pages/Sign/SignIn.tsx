import './signin.css';
import logo from '../../img/header/Logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
// import { setUser } from '../../store/slices/userSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// import { useAppDispatch } from '../../hooks/redux-hooks';

const SignIn = () => {
    const [valueEmail, setValueEmail] = useState('');
    const [valuePass, setValuePass] = useState('');
    const [error, serError] = useState('');
    const push = useNavigate();

    const handleLogin = (email: string, password: string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }: any) => {
                push('/films')
            })
            .catch((err) => {
                if (err.message === 'Firebase: Error (auth/invalid-email).') {
                    serError('Invalid email');
                } else if(err.message === `Firebase: Error (auth/wrong-password).` || `Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).`) {
                    serError('Invalid password');
                }
                console.log(err.message)
            })
    }

    const handleInputEmail: React.ChangeEventHandler<HTMLInputElement> = (e: any) => {
        setValueEmail(e.target.value)
    }

    const handleInputPass: React.ChangeEventHandler<HTMLInputElement> = (e: any) => {
        setValuePass(e.target.value)
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
                        <div className="form-content__title sign">Sign In</div>
                        <div className="input-item">
                            <input type="email" className='form-content__input sign' id="email" onChange={handleInputEmail} required />
                            {valueEmail !== ''
                                ?
                                <label htmlFor="email" className='form-content__label' style={{ top: '7px', fontSize: '11px' }}>Email</label>
                                :
                                <label htmlFor="email" className='form-content__label'>Email</label>
                            }
                        </div>
                        {error !== '' && error === 'Invalid email' && 
                        <div className='error-pass'>{error}</div>
                        }
                        <div className="input-item">
                            <input type="password" className='form-content__input sign' id="pass" onChange={handleInputPass} required />
                            {valuePass !== ''
                                ?
                                <label htmlFor="pass" className='form-content__label' style={{ top: '7px', fontSize: '11px' }}>Password</label>
                                :
                                <label htmlFor="pass" className='form-content__label'>Password</label>
                            }
                        </div>
                        {error !== '' && error === 'Invalid password' && 
                        <div className='error-pass'>{error}</div>
                        }
                        <button className='form-content__button' onClick={() => handleLogin(valueEmail, valuePass)}>Sign In</button>
                        <div className="form-content__down">
                            <label htmlFor="check" className='label-checkbox'>
                                <input type="checkbox" id='check' className='checkbox' checked />
                                Remember me
                            </label>
                            <a href="" className='form-content__help'>Need help?</a>
                        </div>
                        <div className="form-down__text">
                            <div className="down-text-content__signup">
                                New to Netflix? <Link to='/signup'>Sign up now</Link>.
                            </div>
                            <div className="down-text-content__learn">This page is protected by Google reCAPTCHA to ensure you're not a bot. <span>Learn more.</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignIn