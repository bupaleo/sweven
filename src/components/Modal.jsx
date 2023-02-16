import Authorization from "./auth/Authorization";
import Registration from "./auth/Registration";
import Cross from '../assets/cross.png'
import module from './Modal.module.scss'
const Modal = (props) => {
    const modal = props?.modal?.props

    function renderForm(param) {
        switch(param) {
            case 'authorization':
                return <Authorization />;
            case 'registration':
                return <Registration />;
            default:
                return <Authorization />;
        }
    }

    const content = modal?.active && (
        <div className="modal">
            <div className={module.modal_container}>
                <div className="button_cross"> <button className={module.cross} onClick={() => props?.modal.dispatch({ type: "modal", active:"false"})}><img src={Cross}></img></button>
                </div>
                <div> {renderForm(modal?.content)}</div>
                
            </div>            
            <div className="blackout" onClick={() => props?.modal.dispatch({ type: "modal", active:"false"})}></div>

        </div>
    )

    return content

};

export default Modal