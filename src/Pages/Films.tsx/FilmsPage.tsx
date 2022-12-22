import { Navigate } from 'react-router-dom';
import Footer from '../../component/Footer/Footer';
import HeaderFilms from '../../component/Header/HeaderFilms/HeaderFilms';
import MainFilms from '../../component/Main/MainFilms/MainFilms';
// import { useAppDispatch } from '../../hooks/redux-hooks';
import { useAuth } from '../../hooks/use-auth';
// import { setUser } from '../../store/slices/userSlice';
import '../index.css'

const FilmsPage = () => {

    const { isAuth } = useAuth();

    return isAuth ? (
        <div className="wrapper">
            <HeaderFilms />
            <MainFilms />
            <Footer />
        </div>
    ) : (
        <Navigate to='/signin' />
    )
}

export default FilmsPage;