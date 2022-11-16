import styles from "./Footer.module.scss"
import telegram from "../../img/telegram.png"
import phone from "../../img/phone.png"
import whatsup from "../../img/whatsup.png"


function Footer() {
    return (
        <div className={styles.footer__container}>
            <div className={styles.footer__left}>
                <h3>О КОМПАНИИ</h3>
                <ul>
                    <li><a href="/#">Партнёрская программа</a></li>
                    <li><a href="/#">Вакансии</a></li>
                </ul>
            </div>
            <div className={styles.footer__center}>
                <h3>МЕНЮ</h3>
                <div className={styles.footer__table}>
                    <ul>
                        <li><a href="/#">Расчет стоимости</a></li>
                        <li><a href="/#">Кейсы</a></li>
                        <li><a href="/#">Услуги</a></li>
                        <li><a href="/#">Благодарственные письма</a></li>
                        <li><a href="/#">Виджеты</a></li>
                        <li><a href="/#">Сертификаты</a></li>
                        <li><a href="/#">Интеграции</a></li>
                        <li><a href="/#">Блог на Youtube</a></li>
                        <li><a href="/#">Наши клиенты</a></li>
                        <li><a href="/#">Вопрос / Ответ</a></li>
                    </ul>
                </div>
            </div>
            <div className={styles.footer__right}>
                    <h3>КОНТАКТЫ</h3>
                    <p className={styles.footer__phone}>+7 555 555-55-55</p>
                    <div className={styles.footer__media}>
                        <img src={telegram} alt="img"></img>
                        <img src={phone} alt="img"></img>
                        <img src={whatsup} alt="img"></img>
                    </div>
                    <p className={styles.footer__address}>Москва, Путевой проезд 3с1, к 902</p>
                    <p className={styles.footer__rights}>©WELBEX 2022. Все права защищены.</p>
                    <p className={styles.footer__privacy}><a href="/#">Политика конфиденциальности</a></p>
                </div>
        </div>
    )
}

export default Footer;