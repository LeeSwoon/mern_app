import { BrowserRouter as Router, Route, Redirect,Switch } from 'react-router-dom';

import Users from './user/pages/Users'
import NewPlace from './places/pages/NewPlace'
import UserPlaces from './places/pages/UserPlaces'
import MainNavigation from './shared/Navigation/MainNavigation'

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <Switch>
      <Route path='/' exact>
        <Users />
      </Route>
      <Route path='/:uid/places' exact>
        <UserPlaces />
      </Route>
      <Route path='/places/new' exact>
        <NewPlace />
      </Route>
      <Redirect to='/' />
      </Switch>
    </Router>
  );
}

export default App;
