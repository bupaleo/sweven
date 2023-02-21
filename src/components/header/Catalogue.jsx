import React from 'react';
import module from './Catalogue.module.scss'
function Catalogue(props) {
    return (
        <div className={module.catalogue}>
            <div> ГЛИНА </div>   
            <div> ШИТЬЕ  ПЭЧВОРК </div> 
            <div> ВЯЗАНИЕ</div> 
            <div> ТОВАРЫ ДЛЯ ХУДОЖНИКОВ</div> 
            <div> КОНЦЕЛЯРСКИЕ ТОВАРЫ</div>  
        </div>
    );
}

export default Catalogue;