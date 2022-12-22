import './sectionwatch.css';
import devicePile from '../../../../../img/main/device-pile.png'

const SectionWatch = () => {
    return (
        <section className="page__watch">
            <div className="watch__container">
                <div className="watch-content">
                    <div className="watch-content__text">
                        <h1 className="text-content__title">Watch everywhere.</h1>
                        <h2 className="text-content__description">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</h2>
                    </div>
                    <div className="watch-content__video">
                        <img src={devicePile} alt="" className='video-content__img' />
                        <div className='video-block'>
                            <video className="video" autoPlay playsInline muted loop>
                                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionWatch;