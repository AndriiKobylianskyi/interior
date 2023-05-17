import { useState, useEffect } from 'react'
import { useHref } from 'react-router-dom'

import styles from './Furniture-list-item.module.css'



import data from '../../services/main.json'

const FunrnitureListItem = (props) => {
    let [classForMainImg, setClassForMainImg] = useState(styles.furniture__image)
    let [classForDescription, setClassForDescription] = useState(styles.furniture__info)

    let url = useHref().slice(15)
    let emptyarr = []
    data.all.forEach(item => emptyarr.push(item.products))
    let requiredItem = emptyarr.map(item => item.filter(item => item.id == url)).filter(item => item.length > 0)[0][0]
    let { id, titleForElement, mainUrl, description, additionalphotosURLs, producer } = requiredItem
    console.log(mainUrl)

    useEffect(() => {
        if (mainUrl == '/assets/images/shafiKupe/domino.jpg' || mainUrl == '/assets/images/shafiKupe/Alfa.jpg' || mainUrl == '/assets/images/shafiKupe/Omega.jpg' || mainUrl == '/assets/images/shafiKupe/Loft.jpg') {
            setClassForMainImg(styles.furniture__image + ' ' + styles.dopStyleForImg)
            setClassForDescription(styles.furniture__info + ' ' + styles.dopStyleForDescription)
        }
    })






    return (
        <div div className="content" >
            <div className={styles.flexForItem}>
                <div>
                    <img src={process.env.PUBLIC_URL + mainUrl} className={classForMainImg} /><br />
                </div>
                <div className={classForDescription}>
                    <p className={styles.p}> <span className={styles.span}> Назва товару: </span> {titleForElement}</p>
                    <p className={styles.p}><span className={styles.span}> Код товару: </span> {id}</p>
                    <p className={styles.p}><span className={styles.span}> Виробник: </span> {producer}</p>
                    <p></p>


                </div>

            </div>
        </div >

    )
}
export default FunrnitureListItem