import { useHref } from 'react-router-dom'

import styles from './Furniture-list-item.module.css'

import notFoundImage from '../../assets/images/imageNotFound.png'

import data from '../../services/main.json'

const FunrnitureListItem = (props) => {
    let url = useHref().slice(15)
    let emptyarr = []
    data.all.forEach(item => emptyarr.push(item.products))
    let requiredItem = emptyarr.map(item => item.filter(item => item.id == url)).filter(item => item.length > 0)[0][0]
    let { id, titleForElement, mainUrl, description, additionalphotosURLs, producer } = requiredItem








    return (
        <div div className="content" >
            <div className={styles.flexForItem}>
                <div>
                    <img src={process.env.PUBLIC_URL + mainUrl} className={styles.furniture__image} /><br />
                </div>
                <div className={styles.furniture__info}>
                    <p className={styles.p}> <span className={styles.span}> Назва товару: </span> {titleForElement}</p>
                    <p className={styles.p}><span className={styles.span}> Код товару: </span> {id}</p>
                    <p className={styles.p}><span className={styles.span}> Виробник: </span> {producer}</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus optio fuga, maiores mollitia odit ut enim dolore vero, saepe aliquam iure dicta eaque, perspiciatis voluptate officiis totam beatae ad tempore.</p>


                </div>

            </div>
        </div >

    )
}
export default FunrnitureListItem