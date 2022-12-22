import './sectiondownload.css';
import phone from '../../../../../img/main/phone.jpg';
import boxshot from '../../../../../img/main/boxshot.png'

const SectionDownload = () => {
    return (
        <section className='page__download'>
            <div className="download__container">
                <div className="download-content">
                    <div className="download-content__video">
                        <img src={phone} alt="" className='image-mobile' />
                        <div className="video-content__body">
                            <div className="body-video-content__img">
                                <img src={boxshot} alt="" />
                            </div>
                            <div className="body-video-content__text">
                                <p className="text-content-video__title">Stranger Things</p>
                                <p className="text-content-video__sub-title">Downloading...</p>
                            </div>
                            <div className="body-video-content__gif">
                            </div>
                        </div>
                    </div>
                    <div className="download-content__text">
                        <h1 className="text-content__title">
                            Download your shows to watch offline.
                        </h1>
                        <h2 className="text-content__description">
                            Save your favorites easily and always have something to watch.
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionDownload;