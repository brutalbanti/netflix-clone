import './headerhome.css';
import { Link } from 'react-router-dom';
import logotype from '../../../img/header/Logo.svg';
import HeadContent from './component-header/HeadContent';

const HeaderHome = () => {
    return (
        <header className="header">
            <div className="header-opacity"></div>
            <div className="header__container">
                <Link to='/' className='header-logo'><img src={logotype} alt="Логотип Нетфликс" /></Link>
                <div className="header_signIn">
                    <Link to='/signin' className='btn-signin'>Sign In</Link>
                </div>
            </div>
            <HeadContent/>
        </header>
    )
}

export default HeaderHome;