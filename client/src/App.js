import './App.css';
import React from 'react';
import MainRouter from './routes';
import ThemeProvider from './theme';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllRecipes } from "./redux/slices";



function App() {
  
  const dispatch = useDispatch()


 React.useEffect(() => {
    try {
      
          dispatch(fetchAllRecipes())
      
    } catch (error) {
      throw new Error(error)
    }
          
 }, [])
  


  return (
    <ThemeProvider>
      <div className="App">
       <MainRouter>

       </MainRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
