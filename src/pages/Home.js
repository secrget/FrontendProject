import "./../style/Home_page_style.css"
import {NavLink} from "react-router-dom";

const Home = () => {
    return(
        <>
            <nav className="nav">
                <ul>
                    <li><a href="selection_page.html">Онлайн прийом</a></li>
                    <li><a href="https://helsi.me/liki">Замовлення ліків</a></li>
                    <li><a href="https://helsi.me/clinics/kyiv">Клініки</a></li>
                    <li><NavLink to="/login"> Вхід </NavLink></li>
                </ul>
            </nav>

            <header>
                <h1>Шукайте лікарів, клініки та ліки онлайн</h1>
                <p>Записуйтесь на прийом не виходячи з дому</p>
                <div classNameName="section-container">
                    <section>
                        <p className="custom-h2">Записатися до лікаря</p>
                        <form className="form-container">
                            <input type="text" placeholder="Введіть прізвище або спеціальність" className="larger-input" />
                            <button type="submit" className="larger-button">Знайти</button>
                        </form>
                    </section>
                </div>
            </header>
            <div classNameName="screen">
                <div className="search-cards">
                    <div className="view">
                        <div className="link">
                          <div className="div-searchcards">
                                <div className="div-bubble-bubble"></div>
                                <div className="div">
                                    <div className="heading-margin">
                                        <div className="heading">
                                            <div className="text-wrapper">Термінова онлайн-консультація</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="span-text-text-hfzpg">
                                    <p className="p">Знайдемо вільного лікаря за кілька хвилин</p>
                                </div>
                           </div>
                        </div>
                    </div>
                  <div className="view-2">
                        <div className="div-searchcards-wrapper">
                            <div className="div-searchcards-2">
                                <div className="div">
                                    <div className="heading-wrapper">
                                        <div className="heading-2">Усі лікарі</div>
                                    </div>
                                </div>
                                <div className="div-wrapper">
                                    <p className="text-wrapper-2">Запис до лікаря поруч з вами</p>
                                </div>
                            </div>
                        </div>
                  </div>
                  <div className="view-3">
                    <div className="div-searchcards-wrapper">
                        <div className="div-searchcards-5">
                                <div className="div-bubble-bubble-3"></div>
                                <div className="div">
                                    <div className="heading-wrapper">
                                        <div className="heading-2">Замовлення ліків</div>
                                    </div>
                                </div>
                                <div className="div-wrapper">
                                    <p className="text-wrapper-2">Пошук і бронювання ліків зі знижкою</p>
                                </div>
                        </div>
                        </div>
                  </div>
                </div>
            </div>

            <section >
                <h2 className="h">Як записатись до лікаря?</h2>
                <section className="sec">
                    <div className="instruction-step">
                        <div className="step-icon"></div>
                        <img src="https://helsi.me/img/v2_landings/step_1.webp" width="200" height="200" alt="Крок 1"/>
                        <h3 >Крок 1</h3>
                        <span> Оберіть лікаря та запишіться на зручний час</span>
                    </div>
                    <span className="arrow">➡</span>
                    <div className="instruction-step">
                        <div className="step-icon"></div>
                        <img src="https://helsi.me/img/v2_landings/step_2.webp" width="200" height="200" alt="Крок 2"/>
                        <h3 >Крок 2</h3>
                        <span>Прийдіть на прийом у вказаний час без черги</span>
                    </div>
                    <span className="arrow">➡</span>
                    <div className="instruction-step">
                        <div className="step-icon"></div>
                        <img src="https://helsi.me/img/v2_landings/step_3.webp" width="200" height="200"alt="Крок 3"/>
                        <h3 >Крок 3</h3>
                        <span>Слідкуйте за медичною карткою та призначеннями лікаря онлайн</span>
                    </div>
                </section>
            </section>
            <section className="advantages">
                <h2 className="h22">Переваги сервісу</h2>
                <ul>
                    <li className="special">
                        <h3>Прийом у зручний час та без черги</h3>
                        <p>Заплануйте візит до лікаря онлайн та не
                            витрачайте час на черги.</p>
                        <form  target="_blank">
                            <NavLink to="/selection_page" className="button-style"> Знайти лікаря </NavLink>
                        </form>
                    </li>
                    <li className="special-2">
                        <a href="login_page.html">Особистий кабінет</a>
                    </li>
                    <li className="custom-square">
                        <h3>Замовляйте ліки онлайн</h3>
                        <p>Вибирай або броньй потрібні ліки, обирай потрібну аптеку і бронюй</p>
                    </li>
                    <li className="custom-rectangle">
                        <h3>Участь в державній програмі “Доступні ліки”</h3>
                        <p>Можливість отримувати відшкодування вартості ліків для електронних рецептів.</p>
                    </li>
                </ul>
            </section>
            <section className="servise">
                    <h2>Сервіс - це</h2>
                    <ul>
                        <li>
                            <p>24 304 070 </p>
                            <p>пацієнтів</p>
                        </li>
                        <li>
                            <p>37 134 лікарів</p>
                            <p>лікарів</p>
                        </li>
                        <li>
                            <p>1 312 клінік</p>
                            <p>клінік</p>
                        </li>
                        <li>
                            <p>231 763 записів щодня</p>
                            <p>записів щодня</p>
                        </li>
                    </ul>
                    <img src="https://helsi.me/img/mobileApp.webp" alt="mobileApp"/>
            </section>
        </>
    );
  
}
export default Home;