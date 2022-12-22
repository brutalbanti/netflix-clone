import kidsImage from '../../../../../img/main/kids.png';
import './sectionkids.css'
const SectionKids = () => {
    return (
        <section className="page__kids">
            <div className="kids__container">
                <div className="kids-content">
                    <div className="kids-content__image">
                        <img src={kidsImage} alt="" />
                    </div>
                    <div className="kids-content__text">
                        <h1 className="text-content__title">Create profiles for kids.</h1>
                        <h2 className="text-content__description">Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionKids;