import React from 'react';
import module from './Footer.module.scss'
import phone_icon from '../assets/phone_icons.png'
import email_icon from '../assets/email_icons.png'
import location_icon from '../assets/location_icons.png'
import inst from '../assets/inst.png'
import tg from '../assets/tg.png'
import ut from '../assets/ut.png'
function Footer(props) {
    return (
        <footer>
            {/* <div className={module.footer}> <p id={module.one}> Стань частью творческих людей ! </p>
            <p id={module.two}> ПРИСОЕДИНЯЙТЕСЬ К НАМ И БУДЬТЕ  В КУРСЕ О СКИДОЧНЫХ ТОВАРОВ  </p>
            <p id={module.three}> ПОДПИШИСЬ, ЧТОБЫ НЕПРОПУСТИТЬ ТАКОЙ ШАНС  </p>
            </div> */}
            <div className={module.container}>
                <div className={module.contacts}>
                    <div className={module.company}>
                    
                        <ul><h4>Компания</h4>
                            <li>Новости</li>
                            <li>Оферта</li>
                            <li>Поставщикам</li>
                        </ul>
                    </div>
                    <div className={module.customers}>
                    
                             <ul><h4>Покупателям </h4>
                                <li>Как оформить заказ</li>
                                <li>Способы оплаты</li>
                                <li>Условия доставки</li>
                                <li>Правила возврата</li>
                                <li>Программа лояльности</li>
                                <li>Обратная связь</li>
                            </ul>
                    </div>



                    <div className={module.our_conts}>
                     
                        <ul> <h4> Наши контакты </h4>
                            <li className={module.phone_num}>  <p> <img  id={module.phone_icon}src={phone_icon}></img> +996 -XXX-XXX </p></li> 
                            <li className={module.phone_num}> <p> <img id={module.email_icon} src={email_icon}></img>  Служба поддержки </p> </li>
                            <li className={module.phone_num}> <p> <img id={module.location_icon} src={location_icon}></img> ул. Иманова 71/5 </p> </li>
                            <li> пр. Гоголя 4/1</li>
                        </ul>
                        <div> <img id={module.icon} src={inst}></img> <img id={module.icon} src={tg}></img> <img id={module.icon} src={ut}></img> <img id={module.icon} src={inst}></img> </div>
                    </div>         
                </div> <div className={module.line}> </div>    

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