import styles from "./Main.module.scss"

function Main() {
    return (
        <div className={styles.main__container}>
            <div className={styles.main__content}>
                <h1>Зарабатывайте больше <span className={styles.main__content__recolor}>c WELBEX</span></h1>
                <p>Развиваем и контролируем продажи за вас</p>
            </div>
            <div className={styles.main__consult}>
                <h2>Вместе с <span className={styles.main__consult__recolor}>БЕСПЛАТНОЙ КОНСУЛЬТАЦИЕЙ</span> мы дарим:</h2>
                <div className={styles.main__consult__list}>
                    <div className={styles.consult__list__content}>
                        <p className={styles.main__consult__list__title}>ВИДЖЕТЫ</p>
                        <p className={styles.main__consult__list__desc}>30 готовых решений</p>
                    </div>
                    <div className={styles.consult__list__content}>
                        <p className={styles.main__consult__list__title}>DASHBOARD</p>
                        <p className={styles.main__consult__list__desc}>с показателями вашего бизнеса</p>
                    </div>
                    <div className={styles.consult__list__content}>
                        <p className={styles.main__consult__list__title}>SKYPE АУДИТ</p>
                        <p className={styles.main__consult__list__desc}>отдела продаж и CRM системы</p>
                    </div>
                    <div className={styles.consult__list__content}>
                        <p className={styles.main__consult__list__title}>35 ДНЕЙ</p>
                        <p className={styles.main__consult__list__desc}>использования CRM</p>
                    </div>
                </div>
                <button className={styles.main__button}>Получить консультацию</button>
            </div>
            <span className={styles.main__light}></span>
            <span className={styles.main__ball}></span>
        </div>
    )
}

export default Main;