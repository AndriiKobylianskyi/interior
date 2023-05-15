import styles from './AboutUsAndContacts.module.css';

const AboutUsAndContacts = () => {
    return (
        <div className={styles.aboutUs__content}>
            <p className={styles.header}>Контактна інформація</p>
            <p>Представляємо широкий асортимент меблів різних категорій, серед яких Ви неодмінно підберете потрібні Вам вироби.</p>
            <p>Адреса: <span style={{ 'font-weight': '600' }}>м. Фастів вул. Небесної Сотні 4</span></p>
            <p>Контактний номер: <a href="tel:+38(068)846-42-42" className={styles.a}>+38 (063) 812-13-63</a></p>
            <p>Електронна Адреса:  <a href="mailto: interiorbizua@gmail.com" className={styles.a}>interiorbizua@gmail.com</a></p>
        </div>
    )
}
export default AboutUsAndContacts