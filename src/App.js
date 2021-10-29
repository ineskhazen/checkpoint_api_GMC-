
import './App.css';
import { Route, Switch } from 'react-router';
import Home from './Pages/Home/Home';
import Error from './Pages/Error/Error';

import Navbar from './Components/Navbar/Navbar';
import Drink from './Pages/Drink/Drink';
import Drinks from './Pages/Drinks/Drinks';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Drinks" component={Drinks}/>
        <Route path="/Drinks/Drink/:id" component={Drink}/>
        <Route path="/*" component={Error}/>
        
      </Switch>
      <Footer/>
     
    </div>
  );
}

export default App;
