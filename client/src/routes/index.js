import {Route, Routes} from "react-router-dom"
import Hompage from "../pages/homepage"
import RecipiesGrid from "../modules/recipiesGrid"
import RecipePage from "../pages/recipePage"


export default function MainRouter() {
    return (
        <Routes>
            <Route path='/' element={<Hompage />}>
                <Route
                    path='recipes'
                    element={
                        <RecipiesGrid
                            
                        />
                    }
                ></Route>
                <Route path='/recipes/:id' element={<RecipePage />}></Route>
            </Route>
        </Routes>
    )
}