import {Outlet} from "react-router-dom"
import "./pages.css"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";



function Home() {
    return(
        <div className="home-container">
            <div className="content">
                <h1 className="title">Mother Eart Sustainable & Agroecological Food</h1>                
            </div>
            <div>
                <ItemListContainer />
            </div>
            <Outlet />
        </div>
    )
}

export default Home;