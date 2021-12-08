import './app.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Error404 from "./pages/Error404";
import Authentication from './pages/Authentication';
import NavBar from './components/NavBar';
import Header from './components/Header';
import NextCard from './components/NextCard';
import Accounts from './components/Accounts';
import Statistics from './pages/statistics';
import Profile from './pages/profile';
import CreateAccounts from './pages/CreateAccounts';
import AccountUpdateModal from './components/AccountUpdateModal';

function App() {
  
  return (
    
      <Router>
        
        <Switch>
          <Route exact path='/'>
            <Authentication action="login"/>
          </Route>

          <Route exact path='/register'>
            <Authentication action="register"/>
          </Route>

          <Route exact path='/menu'>
            <div className="content">
              <Header />
              <div className="body">
                <NavBar />
                <div className="next-cards-container"> 
                  <NextCard type="positive"/>
                  <NextCard type="negative"/>
                </div>
              </div>
            </div>
          </Route>

          <Route path='/contasapagar'>
            <div className="content">
              <Header />
              <div className="body">
                <NavBar />
                <Accounts status="pending"/>
              </div>
            </div>   
          </Route>

          <Route path='/constaspagas'>
            <div className="content">
              <Header />
              <div className="body">
                <NavBar />
                <Accounts status="finish"/>
              </div>
            </div>   
          </Route>

          <Route path='/criarcontas'>
            <div className="content">
              <Header />
              <div className="body">
                <NavBar />
                <CreateAccounts />
              </div>
            </div>   
          </Route>

          <Route path='/estatisticas'>
            <div className="content">
              <Header />
              <div className="body">
                <NavBar />
                <Statistics />
              </div>
            </div>   
          </Route>

          <Route path='/perfil'>
            <div className="content">
              <Header />
              <div className="body">
                <Profile />
              </div>
            </div>   
          </Route>

          <Route>
            <Error404 />
          </Route>
        </Switch>

      </Router>
  );
}

export default App;
