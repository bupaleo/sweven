import React from 'react';
import module from './Footer.module.scss'
import phone_icon from '../assets/phone_icons.png'
import email_icon from '../assets/email_icons.png'
import location_icon from '../assets/location_icons.png'


function Footer(props) {
    return (
        <footer>
            <div className={module.footer}> <p id={module.one}> Стань частью творческих людей ! </p>
            <p id={module.two}> ПРИСОЕДИНЯЙТЕСЬ К НАМ И БУДЬТЕ  В КУРСЕ О СКИДОЧНЫХ ТОВАРОВ  </p>
            <p id={module.three}> ПОДПИШИСЬ, ЧТОБЫ НЕПРОПУСТИТЬ ТАКОЙ ШАНС  </p>
            </div>
            <div className={module.contacts}>
                <div> <h4>Компания </h4>
                    <ul>
                        <li>Новости</li>
                        <li>Оферта</li>
                        <li>Поставщикам</li>
                    </ul>
                </div>

                <div> <h4>Покупателям </h4>
                    <ul>
                        <li>Как оформить заказ</li>
                        <li>Способы оплаты</li>
                        <li>Условия доставки</li>
                        <li>Правила возврата</li>
                        <li>Программа лояльности</li>
                        <li>Обратная связь</li>
                    </ul>
                </div>

                <div>  <h4>Оптовикам </h4>
                    <ul>
                        <li>Общая информация</li>
                        <li>Обзоры</li>
                        <li>Контакт-центр</li>
                    </ul>
                </div>

                <div> <h4 className={module.h4}>Наши контакты </h4> 
                <ul>
                        <li id={module.phone_icon}> +996 -XXX-XXX</li> 
                        <li id={module.email_icon}> Служба поддержки</li>
                        <li id={module.location_icon}> ул. Иманова 71/5</li>
                        <li> пр. Гоголя 4/1</li>
                        </ul>
                </div>

            </div>
        </footer>
    );
}

export default Footer;


// const Footer = (Props) => {
//     return (
//         <>
            
//         </footer>
//     );
// };

// export default Footer