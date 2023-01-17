import './App.css';
import Header from './components/Header';
import {BrowserRouter} from 'react-router-dom';
import Login from './screens/login';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Router } from './Router/Router';
import { createContext, useState } from 'react';
import LoadingContext from './Context/LoadingContext';
import userContext from './Context/userContext';

function App() {
 
  const [isLoading,setLoading] =useState(false);
  const [userDetails,setUserDetails] = useState({isAdmin: false,userId:'',token:''});

  const updateUserDetails=(userDeail)=>{
    setUserDetails(userDeail);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
         
      <userContext.Provider value={{userDetails,updateUserDetails}} >
        <LoadingContext.Provider value={{setLoading}}>
          {
            isLoading?<div class="loader"></div>:''
          }
          <Header />
            <Router/>
        </LoadingContext.Provider>
          </userContext.Provider>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
