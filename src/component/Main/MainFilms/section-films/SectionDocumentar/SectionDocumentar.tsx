import { Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useState } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import axios from 'axios';
import './sectiondocumentar.css';
import DetailsFilm from '../Component/DetailsFilm';

const random = Math.floor(Math.random() * 19 + 1);


const SectionDocumentar = () => {
    const [popularFilm, setPopularFilm] = useState<any[]>([]);
    const [details, setDetails] = useState<any>({
        name: '',
        overview: '',
        image: '',
        visible: false,
        id: undefined
    });

    useEffect(() => {
        const api = 'https://api.themoviedb.org/3/tv/popular?api_key=' + process.env.REACT_APP_API_KEY_FILM + '&language=en-US&page=' + random;
        axios.get(api)
            .then(data => setPopularFilm(data.data.results))
    }, [])

    const openVideos = (name: string, overview: string, image: string, id: number) => {
        setDetails({
            name: name,
            overview: overview,
            image: image,
            visible: true,
            id: id
        })
    }

    const change = () => {
        setDetails({ visible: false })
    }

    return (
        <section className="page__documentaries">
            <div className="documentaries__container">
                <p className='title-genres'>Popular</p>
                <div className="documentaries-slider">
                    <Swiper
                        modules={[Navigation]}
                        slidesPerView={5}
                        spaceBetween={0}
                        navigation
                        freeMode={true}
                        pagination={{ clickable: true }}
                        mousewheel={{
                            sensitivity: 1
                        }}
                        breakpoints={{
                            // when window width is >= 576px
                            320: {
                                slidesPerView: 1
                            },
                            576: {
                                slidesPerView: 2,
                            },
                            // when window width is >= 768px
                            835: {
                                slidesPerView: 3,
                            },
                            // when window width is >= 1024px
                            1135: {
                                slidesPerView: 4,
                            },
                            1420: {
                                slidesPerView: 5,
                            },
                        }}
                    >
                        {popularFilm.map((film, index) => {
                            return (
                                <SwiperSlide key={index} >
                                    <div className="swiper-content" onClick={() => openVideos(film.name, film.overview, film.backdrop_path, film.id)}>
                                        {film.backdrop_path !== null ?
                                            <div className="swiper-content__img" style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original${film.backdrop_path}')` }}>
                                                <div className="swiper-content__text">
                                                    <p className="swiper-text__name">{film.name}</p>
                                                    <div className="swiper-text__overview">{film.overview}</div>
                                                </div>
                                            </div>
                                            :
                                            <div className="swiper-content__img" style={{ backgroundImage: `url('https://fintolk.pro/wp-content/uploads/2022/02/netflix.jpg')` }}>
                                                <div className="swiper-content__text">
                                                    <p className="swiper-text__name">{film.name}</p>
                                                    <div className="swiper-text__overview">{film.overview}</div>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
                {details.visible &&
                    <>
                        <DetailsFilm {...details} change={change} />
                    </>
                }
            </div>
        </section>
    )
}

export default SectionDocumentar;