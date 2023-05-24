
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import notFoundImage from '../../assets/images/imageNotFound.png'
import vector from '../../assets/images/Vector.png'
import cutoviImg from '../../assets/images/titleImages/kutoviDivanTitle.jpg'
import pryamiImg from '../../assets/images/titleImages/pryamiyDivanTitle.jpg'
import dityachiImg from '../../assets/images/titleImages/dityachiDivanTitle.jpg'
import myakiLigkaImg from '../../assets/images/titleImages/myakeLigkoTitle.jpg'
import woodenImg from '../../assets/images/titleImages/woodenLigkoTitle.jpg'
import kitchenKutImg from '../../assets/images/titleImages/cuhinniKutochekTitle.jpg'
import matracImg from '../../assets/images/titleImages/matracTitle.jpg'
import shafaKupeImg from '../../assets/images/titleImages/shafaKupeTitle.jpg'
import komodImg from '../../assets/images/titleImages/komodiTitle.jpg'
import peredpokiyImg from '../../assets/images/titleImages/peredpokiyTitle.jpg'

import styles from './Furniture-list.module.css';

import data from '../../services/main.json'

import { Link } from 'react-router-dom';



const FurnitureList = () => {



    let [classShow, setClassNames] = useState(styles.dropDownContainer)
    let [filteredArray, setfilteredArray] = useState(JSON.parse(localStorage.getItem('currentState')) ? JSON.parse(localStorage.getItem('currentState')) : data.all[0].products)
    let [searchValue, setSearchValue] = useState('')


    const toggleClass = () => {
        if (classShow === styles.dropDownContainer) {
            setClassNames(styles.dropDownContainer + ' ' + styles.show)
        } else {
            setClassNames(styles.dropDownContainer)
        }
    }

    useEffect(() => {
        if (localStorage.getItem('check')) {
            setClassNames(styles.dropDownContainer + ' ' + styles.show)
        }

        const Debounce = setTimeout(() => {
            idAndTitleFilter(searchValue)
        }, 300)
        return () => clearTimeout(Debounce)
    }, [searchValue])






    const idAndTitleFilter = (value) => {

        if (value == '' || value == 0) {
            setfilteredArray(JSON.parse(localStorage.getItem('currentState')) ? JSON.parse(localStorage.getItem('currentState')) : data.all[0].products)
        }
        else if (isNaN(+value)) {
            let emptyarr = []
            data.all.forEach(item => emptyarr.push(item.products))
            let newArr = []
            emptyarr.filter(item => item.forEach(item => {
                if (item.titleForElement.toLowerCase().trim().startsWith(value.toLowerCase().trim())) {
                    newArr.push(item)
                }


                setfilteredArray(() => newArr)
            }))
        } else {
            let id = value
            let emptyarr = []
            data.all.forEach(item => emptyarr.push(item.products))
            let requiredItem = emptyarr.map(item => item.filter(item => item.id == id)).filter(item => item.length > 0)[0]
            setfilteredArray(() => requiredItem)

        }

    }



    const categoryFilter = (status) => {
        const Debounce = setTimeout(() => {
            toggleClass()
            if (status === 'Кутові дивани') {
                setfilteredArray(() => data.all[0].products)
                document.getElementById('searchValue').value = ""
            } else if (status === 'Прямі дивани') {
                setfilteredArray(() => data.all[1].products)
                document.getElementById('searchValue').value = ""
            } else if (status === 'Дитячі') {
                setfilteredArray(() => data.all[2].products)
                document.getElementById('searchValue').value = ""
            }
            else if (status === 'Ліжка м`які') {
                setfilteredArray(() => data.all[3].products)
                document.getElementById('searchValue').value = ""

            } else if (status === 'Ліжка дерев`яні') {
                setfilteredArray(() => data.all[4].products)
                document.getElementById('searchValue').value = ""
            } else if (status === 'Кухонні куточки') {
                setfilteredArray(() => data.all[5].products)
                document.getElementById('searchValue').value = ""
            } else if (status === 'Матраци') {
                // setfilteredArray(data.all[6].products)
            } else if (status === 'Шафи-купе') {
                setfilteredArray(() => data.all[6].products)
                document.getElementById('searchValue').value = ""
            } else if (status === 'Комоди') {
                setfilteredArray(() => data.all[7].products)
                document.getElementById('searchValue').value = ""
            } else if (status === 'Передпокій') {
                setfilteredArray(() => data.all[8].products)
                document.getElementById('searchValue').value = ""
            }
        }, 100)
        return () => clearTimeout(Debounce)

    }

    function storageMoves() {
        localStorage.clear()
        localStorage.setItem('check', 1)
        localStorage.setItem('currentState', JSON.stringify(filteredArray))
    }

    function renderItems(arr) {
        if (!arr) {
            return
        }

        const items = arr.map(item => {
            let { id, titleForElement, mainUrl } = item

            if (!mainUrl) {
                mainUrl = notFoundImage

            }





            return (
                <Link to={`/furnitureList/${id}`}
                    className={styles.furniture + ' ' + styles.hover}
                    style={{ textDecoration: 'none' }}
                    onClick={storageMoves}


                >
                    <img src={process.env.PUBLIC_URL + mainUrl} alt="картинка" className={styles.furniture__img} />
                    <p className={styles.furniture__name}> {titleForElement}</p>
                    <span className={styles.furniture__id}>Код товару: {id}</span>
                </Link>


            )
        })

        return items
    }

    const items = renderItems(filteredArray)



    return (
        <div className="content">



            <img src={vector}
                alt="dropdown"
                className={styles.dropDownImg}
                onClick={toggleClass}

            />

            <button
                type="number"
                className={styles.catalogButton}
                onClick={toggleClass}>
                Весь каталог
            </button>

            <input
                type="text"
                className={styles.inputSearch}
                placeholder="Введіть код або назву товару"
                id="searchValue"
                onChange={(e) => setSearchValue(e.target.value)}
            />

            <div className={classShow}>
                <div data-close className={styles.modal__close}
                    onClick={toggleClass}
                > &times;</div>


                <NavLink
                    style={{ 'textDecoration': 'none' }}
                    className={styles.hover}
                    onClick={(e) => categoryFilter(e.target.id)}
                >

                    <img src={cutoviImg} id='Кутові дивани' alt="картинка" className={styles.modal__img} />
                    <p className={styles.catalogName} id='Кутові дивани' >Кутові дивани</p>

                </NavLink>

                <NavLink
                    style={{ 'textDecoration': 'none' }}
                    className={styles.hover}
                    onClick={(e) => categoryFilter(e.target.id)}
                >
                    <img src={pryamiImg} id='Прямі дивани' alt="картинка" className={styles.modal__img} />
                    <p id='Прямі дивани' className={styles.catalogName}>Прямі дивани</p>
                </NavLink>

                <NavLink
                    style={{ 'textDecoration': 'none' }}
                    className={styles.hover}
                    onClick={(e) => categoryFilter(e.target.id)}>
                    <img src={dityachiImg} alt="картинка" className={styles.modal__img} id='Дитячі' />
                    <p className={styles.catalogName} id='Дитячі'>Дитячі Дивани</p>
                </NavLink>

                <NavLink
                    style={{ 'textDecoration': 'none' }}
                    className={styles.hover}
                    onClick={(e) => categoryFilter(e.target.id)}>
                    <img src={myakiLigkaImg} alt="картинка" className={styles.modal__img} id='Ліжка м`які' />
                    <p className={styles.catalogName} id='Ліжка м`які'>Ліжка м'які</p>
                </NavLink>

                <NavLink
                    style={{ 'textDecoration': 'none' }}
                    className={styles.hover}
                    onClick={(e) => categoryFilter(e.target.id)}>
                    <img src={woodenImg} alt="картинка" className={styles.modal__img} id='Ліжка дерев`яні' />
                    <p className={styles.catalogName} id='Ліжка дерев`яні'>Ліжка дерев'яні</p>
                </NavLink>

                <NavLink
                    style={{ 'textDecoration': 'none', "margin-top": "15px" }}
                    className={styles.hover}
                    onClick={(e) => categoryFilter(e.target.id)}>
                    <img src={kitchenKutImg} alt="картинка" className={styles.modal__img} id='Кухонні куточки' />
                    <p className={styles.catalogName} id='Кухонні куточки'>Кухонні куточки</p>
                </NavLink>

                <NavLink
                    style={{ 'textDecoration': 'none', "margin-top": "15px" }}
                    className={styles.hover}
                    onClick={(e) => categoryFilter(e.target.id)}>
                    <img src={matracImg} alt="картинка" className={styles.modal__img} id='Матраци' />
                    <p className={styles.catalogName} id='Матраци'>Матраци</p>
                </NavLink>

                <NavLink
                    style={{ 'textDecoration': 'none', "margin-top": "15px" }}
                    className={styles.hover}
                    onClick={(e) => categoryFilter(e.target.id)}>
                    <img src={shafaKupeImg} alt="картинка" className={styles.modal__img} id='Шафи-купе' />
                    <p className={styles.catalogName} id='Шафи-купе'>Шафи-купе</p>
                </NavLink>

                <NavLink
                    style={{ 'textDecoration': 'none', "margin-top": "15px" }}
                    className={styles.hover}
                    onClick={(e) => categoryFilter(e.target.id)}>
                    <img src={komodImg} alt="картинка" className={styles.modal__img} id='Комоди' />
                    <p className={styles.catalogName} id='Комоди'>Комоди</p>
                </NavLink>

                <NavLink
                    style={{ 'textDecoration': 'none', "margin-top": "15px" }}
                    className={styles.hover}
                    onClick={(e) => categoryFilter(e.target.id)}>
                    <img src={peredpokiyImg} alt="картинка" className={styles.modal__img} id='Передпокій' />
                    <p className={styles.catalogName} id='Передпокій' >Передпокій</p>
                </NavLink>


            </div>









            <div className='flex-container'>
                {items}



            </div>

        </div>
    )
}
export default FurnitureList