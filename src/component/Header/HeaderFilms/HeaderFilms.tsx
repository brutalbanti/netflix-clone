import { Link } from "react-router-dom";
import './headerfilms.css';
import logotype from '../../../img/header/Logo.svg';
import axios from "axios";
import React, { useEffect, useState } from 'react'
import HeaderContent from "./Component/HeaderContent";
// import { useAppDispatch } from "../../../hooks/redux-hooks";
import { getAuth, signOut } from "firebase/auth";

const HeaderFilms = () => {
    const [popularImg, setPopularImg] = useState([]);
    const [popularInfo, setPopularInfo] = useState({});
    const [dropdown, setDropdown] = useState(false);
    const [idFilm, setIdFilm] = useState(undefined);

    const randomPage = Math.floor(Math.random() * 20) + 1;
    const random = Math.floor(Math.random() * 20);
    const auth = getAuth();

    useEffect(() => {
        const api = 'https://api.themoviedb.org/3/tv/popular?api_key=' + process.env.REACT_APP_API_KEY_FILM + '&language=en-US&page=' + randomPage;
        axios.get(api)
            .then(data => {
                setPopularImg(data.data.results[random].backdrop_path);
                setPopularInfo(data.data.results[random]);
                setIdFilm(data.data.results[random].id);
            });
    }, [])

    const logOut = () => {
        signOut(auth)
    }

    return (
        <header className="header-films" style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8) 0px, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%), url('https://image.tmdb.org/t/p/original${popularImg}')` }}>
            <div className="background" />
            <div className="header__container">
                <Link to='/films' className='header-logo'><img src={logotype} alt="Логотип Нетфликс" /></Link>
                <div className="header__profile">
                    <span className="profile__icon" onClick={() => setDropdown(!dropdown)}><svg className="NetflixSvgIcon-root NetflixSvgIcon-fontSizeMedium NetflixAvatar-fallback css-13y7ul3" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PersonIcon"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg></span>
                    <ul className={dropdown === false ? 'dropdown-list' : 'dropdown-list show'}>
                        <li><button>Profile</button></li>
                        <li><button onClick={logOut}>Log Out</button></li>
                    </ul>
                </div>
            </div>

            <HeaderContent {...popularInfo} idFilm={idFilm} />

        </header>
    )
}

export default HeaderFilms;