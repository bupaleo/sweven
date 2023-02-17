import {useForm} from "react-hook-form";
import module from './Registration.module.scss'
import Cross from '../assets/cross.png'
import Email_icon from '../assets/email_icon.png'
import lock_key from '../assets/key_icon.png' 
import phone from '../assets/phone.png'
import tick_icon from '../assets/tick_icon.png' 
import google from '../assets/google.png'
import apple from '../assets/apple.png'
import facebook from '../assets/facebook.png'
import eyes from '../ass/Vectorlol.png'
const Registration = (props) => {

    const {register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = async data => {
        console.log(data)
    }

    console.log(errors)

    return (
        <div className="form-modal">
            <div className={module.title}>Регистрация</div>
            <form className="modal-form" onSubmit={handleSubmit(onSubmit)}>
            <div className={module.input_login}>
                    <label htmlFor="firstName">Телефон</label>
                    <div className={module.image_icon}>
                    <img src={phone}></img>
                    <input 
                        type="text" 
                        name="firstName" 
                        placeholder="(ХХХ) ХХ ХХ ХХ" 
                        {...register('firstName', {
                            required: "Параметр обязателен", 
                            maxLength: {
                                value: 20,
                                message: 'Ваше имя должно быть меньше 20 символов'
                            }, 
                            minLength: {
                                value: 3,
                                message: 'Ваше имя должно быть больше 3 символов'
                            } 
                        })}
                    />
                    {errors.firstName && <span className="error" role="alert">{errors.firstName?.message}</span>}
                </div>
                </div>
                <div className={module.line}> </div>



                <div className={module.input_login}>
                    <label htmlFor="email">Email: </label>
                    <div className={module.image_icon}>
                    <img src={Email_icon}></img>
                    <input 
                        type="text" 
                        name="email" 
                        placeholder="Введите почту"
                        {...register("email", {
                            required: "Параметр обязателен",
                            pattern: {
                              value: /\S+@\S+\.\S+/,
                              message: "Ваш email не подходит под нужный формат"
                            }
                        })}
                    />
                    {errors.email && <span className="error" role="alert">{errors.email?.message}</span>}
                </div></div>
                <div className={module.line}> </div>
            


                <div className={module.input_login}>
                    <label htmlFor="password">Пароль: </label>
                    <div className={module.image_icon}>
                    <img src={lock_key}></img>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Введите пароль"
                        {...register("password", {
                            required: "Параметр обязателен",
                            minLength: {
                              value: 5,
                              message: "Минимальная длина пароля 5 символов"
                            }
                          })}
                    />
                    {errors.password && <span className="error" role="alert">{errors.password?.message}</span>}
                    <img src={eyes}></img> 
                    </div></div>
                <div className={module.line}></div>


                <div className={module.input_login}>
                    <label htmlFor="cpassword">Повторите пароль: </label>
                    <div className={module.image_icon}>
                    <img src={lock_key}></img>
                    <input 
                        type="password" 
                        name="cpassword" 
                        placeholder="Повторите пароль"
                        {...register("cpassword", {
                            validate: (value) => {
                                if (watch('password') != value) {
                                    return "Ваши пароли не совпадают";
                                }
                            },
                            required: 'Параметр обязателен'
                        })}
                    />
                    {errors.cpassword && <span className="error" role="alert">{errors.cpassword?.message}</span>}
                    <img src={eyes}></img>
                    </div></div>
                <div className={module.line}> </div>
                <div>
                <div className={module.forget}> 
                  <p> <button className={module.tick}> <img className={module.email_icon} src={tick_icon}></img> </button> Запомнить меня</p> </div>
                    <label htmlFor="submit"></label>
                    <input className={module.login_button} type="submit" name="submit" value="Зарегистрироваться"/>
                </div>
                <div className={module.icons_container}> Войти с помощью:
                    <div className={module.icons}>
                        <a href='#'> <img src={google} className={module.icon} alt='gmail'></img> </a>
                        <a href='#'  id={module.one}> <img src={apple} className={module.icon} id={module.a} alt='apple'></img> </a>
                        <a href='#'  id={module.one}> <img src={facebook} className={module.icon} alt='facebook'></img> </a>
                    </div>
                </div>
                <div className={module.signin}><p> У вас уже есть аккаунт?  <a href='#'>Войти </a> </p> </div>

            </form>
        </div>
    )

};

export default Registration