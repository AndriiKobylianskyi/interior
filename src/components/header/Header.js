import Dropdown from 'react-bootstrap/Dropdown';


import styles from './Header.module.css';
import instagram from '../../assets/images/social_networks/instagram.png'
import viber from '../../assets/images/social_networks/viber.png'
import telegram from '../../assets/images/social_networks/telegram.png'
import facebook from '../../assets/images/social_networks/facebook.png'

import { Link } from 'react-router-dom';


const Header = () => {

    return (
        <div className="content flex-container">
            <Link to='/' className={styles.logo}>interior</Link>

            <div className={styles.header__social}>
                <a href="https://www.instagram.com/interior.mebli/?igshid=YmMyMTA2M2Y%3D" className={styles.header__social_item}>
                    <img src={instagram} alt="instagramImg" />
                </a>
                <a href="viber://chat?number=%2B380638121363" className={styles.header__social_item}>
                    <img src={viber} alt="ViberImg" />
                </a>
                <a href="https://t.me/Mebli_INTERIOR" className={styles.header__social_item}>
                    <img src={telegram} alt="TelegramImg" />
                </a>
                <a href="https://www.facebook.com/groups/interior.biz.ua" className={styles.header__social_item}>
                    <img src={facebook} alt="FaceBookImg" />
                </a>


            </div>


            <a href="tel:+38(068)846-42-42" className={styles.a}>+38 (063) 812-13-63</a>
            <p className={styles.p}>м. Фастів <br />вул. Небесної Сотні 4</p>



            <nav >
                <ul className={styles.ul}>
                    <li><Link to="/" className={styles.a}>Каталог </Link></li>
                    <li><Link to="/aboutUsAndContacts" className={styles.a}>Контакти </Link></li>
                    <li><Link to="/aboutUsAndContacts" className={styles.a}>Про нас</Link></li>
                    <li>
                        <Dropdown >
                            <Dropdown.Toggle variant="success" id="dropdown-basic" style={{
                                // 'position': 'absolute', 'top': 0, 'bottom': '5px', 'font-size': '16px', 'font-weight': '600', 'color': '#C0C0C0',
                                // 'background-color': '#292929', 'border': 'none'
                                'padding': 0, 'background-color': '#292929', 'border': 'none', 'margin-bottom': "2px",
                                'font-size': '16px', 'font-weight': '600', 'color': '#C0C0C0',
                            }}>
                                Графік
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{
                                'width': "220px",
                                'background-color': '#292929',
                                'color': '#F0F0F0',
                                'padding': '5px 10px 10px',
                                'font-size': '16px',
                                'font-weight': '500'

                            }}>
                                Понеділок-вихідний <br />
                                Вівторок-П'ятниця 10-18 <br />
                                Субота-Неділя 10-15 <br />
                            </Dropdown.Menu>
                        </Dropdown></li>
                    <li><Link to='/delivery' className={styles.a}>Доставка/Оплата</Link></li>
                </ul>

            </nav>






        </div>
    )
}

export default Header