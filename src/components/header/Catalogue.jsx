import React from 'react';
import module from './Catalogue.module.scss'
function Catalogue(props) {
    return (
        <div className={module.catalogue}>
            <div className={module.title}>  
                <ul  className={module.ul}>ГЛИНА
                    <li> Гончарная машина   </li> 
                    <li> Резаки , каттеры и плунжеры  </li>
                    <li> Ролики , линейки  </li>
                    <li> Стеки и кисти </li>
                    </ul> 
                    </div>   
            <div className={module.title}> 
            <ul>ШИТЬЕ  ПЭЧВОРК 
                    <li> Ткани </li> 
                    <li> Нитки </li>
                    </ul> </div> 
            <div className={module.title}>  
            <ul>ВЯЗАНИЕ
                    <li> Пряжа </li> 
                    <li> Вязальная буловка </li>
                    <li> Спицы </li>
                    </ul> 
                    </div> 
            <div className={module.title}> 
            <ul>ТОВАРЫ ДЛЯ ХУДОЖНИКОВ
                    <li> Мольберты </li> 
                    <li> Кисти </li>
                    <li> Стойки </li>
                    </ul> 
                    </div> 
            <div className={module.title}>            
                <ul>КОНЦЕЛЯРСКИЕ ТОВАРЫ  
                    <li> Ручки </li> 
                    <li> Карандаши </li>
                    </ul> </div>  
        </div>
    );
}

export default Catalogue;