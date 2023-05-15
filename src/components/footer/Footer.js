import instagram from '../../assets/images/social_networks/instagram.png'
import viber from '../../assets/images/social_networks/viber.png'
import telegram from '../../assets/images/social_networks/telegram.png'
import facebook from '../../assets/images/social_networks/facebook.png'

import styles from './Footer.module.css';


const Footer = () => {
    return (
        <div className="content flex-container">
            <a href="tel:+38(063)812-13-63" className={styles.a}>+38 (063) 812-13-63</a>

            <div className={styles.footer__social}>
                <a href="https://www.instagram.com/interior.mebli/?igshid=YmMyMTA2M2Y%3D" className={styles.footer__social_item}>
                    <img src={instagram} alt="instagramImg" />
                </a>
                <a href="viber://chat?number=%2B380638121363" className={styles.footer__social_item}>
                    <img src={viber} alt="viberImg" />
                </a>


                <a href="https://t.me/Mebli_INTERIOR" className={styles.footer__social_item}>
                    <img src={telegram} alt="telegramImg" />
                </a>
                <a href="https://www.facebook.com/groups/interior.biz.ua" className={styles.footer__social_item}>
                    <img src={facebook} alt="FaceBookImg" />
                </a>
            </div>

            <span className={styles.span}>м. Фастів <br />вул. Небесної Сотні 4</span>

            <a href="mailto: interiorbizua@gmail.com" className={styles.a}>interiorbizua@gmail.com</a>

        </div>
    )
}
export default Footer