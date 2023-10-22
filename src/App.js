import './App.css';
import { Form } from './components/Form/index';
import { Home } from './components/Home';
import { Profile } from './components/Profile';
import { Chat } from './components/Chat';
import { Route, Switch} from 'react-router-dom';
import { LogIn } from './components/Login';
import { SignIn } from './components/Signin';


function App() {
  return ( 
  <div>
    <Switch>
      <Route exact path="/" component={Form}/>
      <Route path="/home" component={Home}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/support" component={Chat}/>
      <Route path="/login" component={LogIn}/>
      <Route path="/signin" component={SignIn}/>
    </Switch>
  </div>
    
  );
}

export default App;
