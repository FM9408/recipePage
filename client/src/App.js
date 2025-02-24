import './App.css';
import React from 'react';
import MainRouter from './routes';
import ThemeProvider from './theme';
import { useDispatch } from 'react-redux';
import { fetchAllRecipes, queryAllTags } from "./redux/slices";



function App() {
  
  const dispatch = useDispatch()


 React.useEffect(() => {
    try {
      
      dispatch(fetchAllRecipes())
      dispatch(queryAllTags())
      
    } catch (error) {
      throw new Error(error)
    }
          
 }, [dispatch])
  


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
