import Slider from '../slider/Slider'
import ImageComponent from '../imageComponent/ImageComponent'

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





    let items
    if (additionalphotosURLs.length > 1) {
        items = <Slider additionalphotosURLs={additionalphotosURLs} />
    } else {
        items = <ImageComponent mainUrl={mainUrl} />
    }


    let producerElement
    if (!producer) {
        producerElement = null
    } else {
        producerElement = < p className={styles.p} > <span className={styles.span}> Виробник: </span> {producer}</ p>
    }




    return (
        <div div className="content" >
            <div className={styles.flexForItem}>
                <div >
                    {items} <br />
                </div>
                <div className={classForDescription}>
                    <p className={styles.p}> <span className={styles.span}> Назва товару: </span> {titleForElement}</p>
                    <p className={styles.p}><span className={styles.span}> Код товару: </span> {id}</p>
                    {producerElement}
                    <p>{description}</p>


                </div>

            </div>
        </div >

    )
}
export default FunrnitureListItem