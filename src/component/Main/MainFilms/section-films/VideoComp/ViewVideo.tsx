import './viewvideo.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import YouTube from 'react-youtube';

interface prop {
    idFilm?: any
}

const ViewVideo = ({ idFilm }: prop) => {
    const [infoMovie, setInfoMovie] = useState<any>({
        platform: '',
        key: null,
    });
    useEffect(() => {
        const api = 'https://api.themoviedb.org/3/tv/' + idFilm + '/videos?api_key=' + process.env.REACT_APP_API_KEY_FILM + '&language=en-US'
        axios.get(api)
            .then(data => {
                setInfoMovie({
                    platform: data.data.results[0].site,
                    key: data.data.results[0].key
                })
            })
    }, [])

    return (
        <section className="video-content youtube">
            {infoMovie.key !== null ?
                <iframe src={'https://www.youtube-nocookie.com/embed/' + infoMovie.key} title='trailer' allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className='youtube'
                    sandbox='allow-presentation allow-same-origin allow-scripts allow-popups allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation allow-presentation'
                ></iframe>
                :
                <div className='error-iframe'>Trailer for this movie is not available or is not found</div>
            }
        </section>
    )
}

export default ViewVideo;