import "./../style/login_stile.css"
import {NavLink} from "react-router-dom";
const Login = () => {
    return(
        <>
            <h1>Ласкаво просимо!</h1>
            <p>
               <NavLink to="/login" id="loginLink"> Вхід </NavLink> | <NavLink to="/registration" id="registrationLink"> Реєстрація</NavLink>
            </p>

            <form>
                <label htmlFor="login">Логін:</label>
                <input type="email" id="login" name="login" required /><br />

                <label htmlFor="password">Пароль:</label>
                <input type="password" id="password" name="password" required /><br />
            </form>
            <form  target="_blank" rel="noopener noreferrer">
                <NavLink to="/user_page" id="buttone"> Увійти </NavLink>
            </form>
        </>
    );

}
export default Login;