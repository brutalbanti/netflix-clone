import React, { useState } from 'react';
import ViewVideo from '../../../Main/MainFilms/section-films/VideoComp/ViewVideo';
import HeaderFilms from '../HeaderFilms';
import closeimg from '../../../../img/close.svg';

interface information {
    name?: string,
    overview?: string,
    idFilm?: any
}

const HeaderContent = ({ name, overview, idFilm }: information) => {
    const [viewVideo, setViewVideo] = useState(false);

    return (
        <>
            <div className="header-content">
                <div className="header-content__container">
                    <div className="header-content__text">
                        <div className="text-content-header__title">{name}</div>
                        <p className="text-content-header__description">{overview !== '' ? overview : 'Not overview'}</p>
                        <button className="text-content-header__button" onClick={() => setViewVideo(true)}>Play</button>
                    </div>
                </div>
            </div>
            {idFilm !== undefined && viewVideo !== false &&
                <>
                    <ViewVideo idFilm={idFilm} />
                    <img src={closeimg} alt="" className='close-icon' onClick={() => setViewVideo(false)}/>
                </>
            }
        </>
    )
}

export default HeaderContent;