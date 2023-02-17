import module from './Header.module.scss'
import logo from '../assets/logo.png'

const Header = (Props) => {
    return (
        <header>
            <div className={module.header_a}>
                <img src={logo}></img>
                <div className={module.container}> <a href='#'> ГЛАВНЫЙ </a>
                    <a href='#'> КАТАЛОГ </a>
                    <a href='#'>  СВЯЗАТЬСЯ С НАМИ </a>
                    <a href='#'> АКЦИИ </a>  </div>
                <div> <a href='#'> img </a>
                    <a href='#'> img </a>
                    <a href='#'>  img  </a>
                    <a href='#'> img </a>
                    </div>
            </div>
        </header>
    );
};

export default Header