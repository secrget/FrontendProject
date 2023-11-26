import "./../style/selection_page_style.css"

const Selection_page = () => {
    return(
        <>
            <section className="doctor">
              <div className="container">
                <div className="left-column">
                  <section className="filter">
                    <h2>Фільтри:</h2>
                    <div className="separator"></div>
                    <h3>Оплата послуг:</h3>
                    <section>
                      <p>Безкоштовно:</p>
                      <label>
                        <input type="checkbox" id="declarationFilter" name="declarationFilter" />
                        При наявності декларації
                      </label>
                      <br />
                      <label>
                        <input type="checkbox" id="referralFilter" name="referralFilter" />
                        При наявності направлення
                      </label>
                    </section>
                    <br />
                    <div className="toggle">
                      <p>Платно:</p>
                      <input type="checkbox" id="paymentFilter" name="paymentFilter" />
                      <label htmlFor="paymentFilter">Платний прийом</label>
                    </div>
                    <div className="separator"></div>
                    <div className="gender-filter">
                      <h2>Стать лікаря</h2>
                      <label>
                        <input type="radio" name="genderFilter" value="male" />
                        Чоловік
                      </label>
                      <br />
                      <label>
                        <input type="radio" name="genderFilter" value="female" />
                        Жінка
                      </label>
                    </div>
                    <div className="separator"></div>
                    <div className="experience-filter">
                      <h2>Стаж лікаря</h2>
                      <label>
                        <input type="radio" name="experienceFilter" value="0-2" />
                        0-2 роки
                      </label>
                      <br />
                      <label>
                        <input type="radio" name="experienceFilter" value="2-3" />
                        2-3 роки
                      </label>
                      <br />
                      {/* ... Other experience filters */}
                    </div>
                    <div className="separator"></div>
                  </section>
                </div>
                <div className="doctor-card">
                  <div className="doctor-info">
                    <div className="doctor-inf">
                      <div className="doctor-image">
                        {/* Insert the doctor's photo here */}
                      </div>
                      <p className="inf">Стаж: 10 років</p>
                    </div>
                    <div className="doctor-details">
                      <h2 data-original-text="Сімейний лікар">Сімейний лікар</h2>
                      <hr />
                      <p className="schedule">Ф.І.О </p>
                      <hr />
                      <p className="schedule">Умови прийому:</p>
                      <p>Від 600грн</p>
                      <p>При заключеній декларації з цим лікарем</p>
                      <p>Рейтинг: 4.8</p>
                      <hr />
                      <div className="address">
                        <p>Приватна клініка</p>
                        <p>Ф.І.О</p>
                        <p>м. Київ, вул. Єфремова Академіка, 8 А, кабінет 1</p>
                      </div>
                    </div>
                    <div className="doctor-availability">
                      <div className="container1">
                        <div className="text-wrapper">
                          <div className="text">Сьогодні</div>
                          <div className="text">Завтра</div>
                        </div>
                        <div className="text-wrapper1">
                          <div className="text1">-</div>
                          <div className="text1">14.40</div>
                        </div>
                        <div className="text-wrapper2">
                          <div className="text2">-</div>
                          <div className="text2">15.00</div>
                        </div>
                        <div className="text-wrapper3">
                          <div className="text3">-</div>
                          <div className="text3">15.40</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        </>
    );

}
export default Selection_page;