import styles from "./Header.module.scss"
import logo from "../../img/logo.png"
import telegram from "../../img/telegram.png"
import phone from "../../img/phone.png"
import whatsup from "../../img/whatsup.png"
import logo1 from "../../img/logo1.png"

function Header() {
    return (
        <div className={styles.header__container}>
            <div className={styles.header__logo}>
                <img src={logo1} alt="img" className={styles.header__logo1}></img>
                <img src={logo} alt="img"></img>
                <p>крупный интегратор CRM в Росcии и ещё 8 странах</p>
            </div>
            <div className={styles.header__menu}>
                <ul>
                    <li><a href="/#">Услуги</a></li>
                    <li><a href="/#">Виджеты</a></li>
                    <li><a href="/#">Интеграции</a></li>
                    <li><a href="/#">Кейсы</a></li>
                    <li><a href="/#" className={styles.header__cer}>Сертификаты</a></li>
                </ul>
            </div>
            <p className={styles.header__phone}>+7 555 555-55-55</p>
            <div className={styles.header__media}>
                <img src={telegram} alt="img"></img>
                <img src={phone} alt="img"></img>
                <img src={whatsup} alt="img"></img>
            </div>
            <span className={styles.header__light}></span>
            <span className={styles.header__ball__purple}></span>
            <span className={styles.header__ball__yellow}></span>
        </div>
    )
}

export default Header;