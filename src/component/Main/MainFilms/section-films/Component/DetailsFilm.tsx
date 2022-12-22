import './detailsfilms.css';
import close from '../../../../../img/icons-close-64.png';
import ViewVideo from '../VideoComp/ViewVideo';
import React, { useState } from 'react';

interface EmployeeProps {
    name: string,
    overview: string,
    image: string,
    visible: boolean,
    change: any,
    id: number
}

const DetailsFilm = ({ name, overview, image, change, id }: EmployeeProps) => {
    const [viewVideo, setViewVideo] = useState(false);
    return (
        <section className="details-films">
            <div className="details-films__content">
                {image === null
                    ?
                    <div className="details-film-content__text" style={{ backgroundImage: `url('https://fintolk.pro/wp-content/uploads/2022/02/netflix.jpg')` }}>
                        <img src={close} alt="close-icon" className='close-icon-video' onClick={change} />
                        <div className='background-image' />
                        <div className="film-content-text__name">
                            {name}
                        </div>
                        <div className="film-content-text__overview">
                            {overview}
                        </div>
                        <button className="film-content-text__button" onClick={() => setViewVideo(true)}>Play</button>
                    </div>
                    :
                    <div className="details-film-content__text" style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8) 0px, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%), url('https://image.tmdb.org/t/p/original${image}')` }}>
                        <img src={close} alt="close-icon" className='close-icon-video' onClick={change} />
                        <div className='background-image' />
                        <div className="film-content-text__name">
                            {name}
                        </div>
                        <div className="film-content-text__overview">
                            {overview}
                        </div>
                        <button className="film-content-text__button" onClick={() => setViewVideo(true)}>Play</button>
                    </div>
                }
                {/* <div className="details-films-content__recommend" >
                    HELLO WORLD
                </div> */}
            </div>
            {id !== null && viewVideo !== false &&
                <>
                    <ViewVideo idFilm={id} />
                    <img src={close} alt="" className='close-icon' onClick={() => setViewVideo(false)} />
                </>
            }
        </section>
    )
}

export default DetailsFilm;