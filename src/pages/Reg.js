import "./../style/reg_style.css"
import {NavLink} from "react-router-dom";
const Reg = () => {
    return(
        <>
              <p>
                <NavLink to="/login" id="loginLink"> Вхід </NavLink> | <NavLink to="/registration" id="registrationLink"> Реєстрація</NavLink>
              </p>
              <form>
                    <label htmlFor="email">Адрес електроної пошти:</label>
                    <input type="email" id="email" name="email" required /><br />

                    <label htmlFor="phone_number">Номер телефона:</label>
                    <input type="email" id="phone_number" name="phone_number" required /><br />

                    <label htmlFor="password">Пароль:</label>
                    <input type="password" id="password" name="password" required /><br />

                    <label htmlFor="password_confirm">Пітвердження паролю:</label>
                    <input type="password" id="password_confirm" name="password_confirm" required /><br />
              </form>
              <form  target="_blank">
                  <NavLink to="/login" id="buttone"> Зареєструватися </NavLink>
              </form>
        </>
    );

}
export default Reg;