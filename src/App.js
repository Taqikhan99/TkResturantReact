
import './App.css';
import Home from './pages/Home';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Contact from './pages/Contact';
import { ToastContainer, toast } from 'react-toastify';
import About from './pages/About';
function App() {
  return (
    <BrowserRouter>
    <div className="container-fluid">
    <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route exact path='/contact'>
        <Contact/>
      </Route>
      <Route exact path='/about'>
        <About/>
      </Route>
    </Switch>
      
    </div>
    

    </BrowserRouter>


  );
}

export default App;
