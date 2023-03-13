import module from './Header.module.scss'
import logo from '../assets/logo.png'
import heart from '../assets/heart.png'
import lupa from '../assets/lupa.png'
import cart from '../assets/cart_img.png'
import vector from '../assets/vector.png'
import Catalogue from './Catalogue.jsx'
import { Link } from 'react-router-dom'

const Header = (Props) => {
    return (
        <header>
            <div className={module.header_a}>
                <img src={logo}></img>
                <div className={module.container}>
                    <p><Link to='/'>Главная</Link></p>
                    <p><Link to='/catalogue'>Катал</Link></p>
                    {/* <a href='http://localhost:5173'>ГЛАВНЫЙ</a> */}
                    {/* <li><Link to='/'>mAIN</Link></li> */}
                    {/* <li><Link to='/catalogue'>Каталог</Link></li> */}
                    {/* <a href='/catalogue'>Каталог</a> */}
                    {/* <li><Link to='/catalogue'>Каталог</Link></li> */}
                    <a href='#'>СВЯЗАТЬСЯ С НАМИ</a>
                    <a href='#'>АКЦИИ</a>
                </div>
                <div className={module.burger}>
                    <i class="fa-solid fa-bars"></i>
                </div>
                <div className={module.head_pic}>
                    <a href='#'><img src={vector}></img></a>
                    <a href='#'><img src={cart}></img></a>
                    <a href='#'><img src={lupa}></img></a>
                    <a href='#'><img src={heart}></img></a>
                </div>
            </div>
        </header>
    );
};

export default Header