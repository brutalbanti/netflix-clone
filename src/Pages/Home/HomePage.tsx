import Footer from '../../component/Footer/Footer';
import HeaderHome from '../../component/Header/HeaderHome/HeaderHome';
import MainHome from '../../component/Main/MainHome/MainHome';
import '../index.css'
const HomePage = () => {
    return (
        <div className='wrapper'>
            <HeaderHome />
            <MainHome />
            <Footer />
        </div>
    );
}

export default HomePage;