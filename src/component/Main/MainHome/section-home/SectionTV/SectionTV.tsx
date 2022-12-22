import './sectiontv.css';
import tv from '../../../../../img/main/tv.svg';

const SectionTV = () => {
    return (
        <section className="page__tv-watch">
            <div className="tv-watch__container">
                <div className="tv-watch__content watch-content">
                    <div className="watch-content__text">
                        <h1 className="text-content__title">
                            Enjoy on your TV.
                        </h1>
                        <h2 className="text-content__description">
                            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
                        </h2>
                    </div>
                    <div className="watch-tv-content__video">
                        <img src={tv} alt="" className='border-tv' />
                        <div className="video-block-tv">
                            <video className="video" autoPlay playsInline muted loop>
                                <source src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v' type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionTV;