import "./../style/user_stile.css"
import {NavLink} from "react-router-dom";
const styles = {
  FIO: {
    width: '400px',
    height: '60px',
    borderWidth: '0.5px',
    borderStyle: 'inset',
    background: 'rgb(41, 141, 228)',
    borderRadius: '25px',
    textAlign: 'center',
    lineHeight: '30px',
    fontSize: '27px',
  },
  img: {
    borderRadius: '200px',
    transition: 'transform 5s linear',
    textAlign: 'center',
  },

  rotateImage: {
    transform: 'rotate(360deg)',
  },
   text: {
     fontSize: '20px',
     width: '200px',
     textAlign: 'center',
  },
};
const User_page= () => {
    return(
        <>
            <div>
                  <p style={styles.FIO}>Мамітько Єгор Васильович</p>

                  <div style={styles.text}>
                    <p>Вік: 20</p>
                    <p>Стать: чоловіча</p>
                    <p>Дата народження: 25.10.03</p>
                  </div>
            </div>

          <section id="rocord">
            <p>Зарезерововані зустрічі</p>
            <table>
              <thead>
                <tr>
                  <th>Час</th>
                  <th>Дата</th>
                  <th>Ф.І.О лікаря</th>
                  <th>Вулиця</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>14.40</td>
                  <td>02.10.2023</td>
                  <td>Антонова Яніна Вікторівна</td>
                  <td>м. Київ, вул. Єфремова Академіка, 8 А, кабінет 1</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section id="inform_treatment">
            <table className="treatment-module">
              <tbody>
                <tr>
                  <th colSpan="2">Інформація про лікування</th>
                </tr>
                <tr>
                  <td>Ваш статус:</td>
                  <td>Пацієнт</td>
                </tr>
                <tr>
                    <td>Дата призначення лікування:</td>
                    <td>01.01.2023</td>
                </tr>
                <tr>
                    <td>Лікар:</td>
                    <td>Доктор Іванова</td>
                </tr>
                <tr>
                    <td>Термін лікування:</td>
                    <td>14 днів</td>
                </tr>
                <tr>
                    <td colSpan="2">Опис лікування: Lorem ipsum dolor sit amet, consectetur adipiscing elit...</td>
                </tr>
              </tbody>
            </table>
          </section>
          <table className="disease-history">
            <tbody>
              <tr>
                <th colSpan="2">Історія Хвороби</th>
              </tr>
              <tr>
                  <td>Дата діагнозу:</td>
                  <td>15.03.2023</td>
              </tr>
              <tr>
                  <td>Хвороба:</td>
                  <td>Грип</td>
              </tr>
              <tr>
                  <td>Лікар:</td>
                  <td>Доктор Петров</td>
              </tr>
              <tr>
                  <td>Термін лікування:</td>
                  <td>7 днів</td>
              </tr>
              <tr>
                  <td>Симптоми:</td>
                  <td>Горло боліло, висока температура, кашель</td>
              </tr>
              <tr>
                  <td>Лікування:</td>
                  <td>Призначено антибіотики та покріплення</td>
              </tr>
            </tbody>
          </table>
          <form  target="_blank">
              <NavLink to="/selection_page" className="buttone"> Знайти лікаря </NavLink>
          </form>
        </>
    );

}
export default User_page;