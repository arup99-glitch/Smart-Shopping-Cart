import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart';
import Header from './Components/Header';

import Home from './Components/Home';

function App() {
  return (
    <BrowserRouter>
     <Header></Header>
     <div className='App'>
      <Route path='/' exact>
       <Home/>
      </Route>
      <Route path='/cart' exact>
       <Cart/>
      </Route>
     </div>
    </BrowserRouter>
    
    
  );
}

export default App;
