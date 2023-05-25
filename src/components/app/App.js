import Header from "../header/Header";
import Footer from "../footer/Footer";
import FurnitureList from "../furniture-list/Furniture-list";
import FunrnitureListItem from "../furniture-list-item/Furniture-list-item";
import AboutUsAndContacts from "../aboutUsandContacts/AboutUsAndContacts";
import Delivery from "../delivery/Delivery";
import Slider from "../slider/Slider";


import data from '../../services/main.json'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {


    return (

        <Router>
            <header className="header">
                <Header />
            </header>


            <main className="main">
                <Routes>
                    <Route path="/interior" element={<FurnitureList />} />
                    <Route path="/furnitureList/:furnitureId" element={<FunrnitureListItem />} />
                    <Route path="/delivery" element={<Delivery />} />
                    <Route path="/aboutUsAndContacts" element={<AboutUsAndContacts />} />
                    <Route path="/" element={<FurnitureList />} />
                </Routes >
            </main>
            <footer className="footer">
                <Footer />
            </footer>
        </Router>
    )
}

export default App