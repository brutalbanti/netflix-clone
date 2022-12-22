import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__top">
                    <div className="foo-top-content__questions">
                        Questions? Call <a href="tel:0800-509-417">0800-509-417</a>
                    </div>
                </div>
                <div className="footer__center">
                    <ul className="foo-center-content__list">
                        <li className="foo-center-list__item">
                            <a href="">FAQ</a>
                        </li>
                        <li className="foo-center-list__item">
                            <a href="">Investor Relations</a>
                        </li>
                        <li className="foo-center-list__item">
                            <a href="">Privacy</a>
                        </li>
                        <li className="foo-center-list__item">
                            <a href="">Speed Test</a>
                        </li>
                    </ul>
                    <ul className="foo-center-content__list">
                        <li className="foo-center-list__item">
                            <a href="">Help Center</a>
                        </li>
                        <li className="foo-center-list__item">
                            <a href="">Jobs</a>
                        </li>
                        <li className="foo-center-list__item">
                            <a href="">Cookie Preferences</a>
                        </li>
                        <li className="foo-center-list__item">
                            <a href="">Legal Notices</a>
                        </li>
                    </ul>
                    <ul className="foo-center-content__list">
                        <li className="foo-center-list__item">
                            <a href="">Account</a>
                        </li>
                        <li className="foo-center-list__item">
                            <a href="">Ways to Watch</a>
                        </li>
                        <li className="foo-center-list__item">
                            <a href="">Corporate Information</a>
                        </li>
                        <li className="foo-center-list__item">
                            <a href="">Only on Netflix</a>
                        </li>
                    </ul>
                    <ul className="foo-center-content__list">
                        <li className="foo-center-list__item">
                            <a href="">Media Center</a>
                        </li>
                        <li className="foo-center-list__item">
                            <a href="">Terms of Use</a>
                        </li>
                        <li className="foo-center-list__item">
                            <a href="">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__down">
                    <p>
                        Netflix Ukraine
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;