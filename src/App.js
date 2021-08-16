
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Flight from './pages/Flight'
import Mission from './pages/Mission'
import Config from './pages/Config'
import Docs from './pages/Docs'

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Flight}/>
        <Route path='/mission' component={Mission}/>
        <Route path='/config' component={Config}/>
        <Route path='/docs' component={Docs}/>
      </Switch>
    </Router>
      
    </>
  );
}

export default App;
