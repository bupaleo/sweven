import module from './Header.module.scss'
import logo from '../assets/logo.png'
import heart from '../assets/heart.png'
import lupa from '../assets/lupa.png'
import cart from '../assets/cart_img.png'
import vector from '../assets/vector.png'

const Header = (Props) => {
    return (
        <header>
            <div className={module.header_a}>
                <img src={logo}></img>
                <div className={module.container}>
                    <a href='#'>ГЛАВНЫЙ</a>
                    <a href='#'>КАТАЛОГ</a>
                    <a href='#'>СВЯ ЗАТЬСЯ С НАМИ</a>
                    <a href='#'>АКЦИИ</a>
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