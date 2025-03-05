import {Route, Routes} from "react-router-dom"
import Hompage from "../pages/homepage"
import RecipiesGrid from "../modules/recipiesGrid"
import SignUpPage from "../pages/auth/signUpPage"
import RecipePage from "../pages/recipePage"
import AddARecipePage from "../pages/AddARecipePage"

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
                >

                </Route>
                <Route path='/recipes/:id' element={<RecipePage />}></Route>
                <Route path="recipes/AddNewRecipe" element ={<AddARecipePage />} />
                <Route path={"/signUp"} element={<SignUpPage />} />
                
            </Route>
        </Routes>
    )
}