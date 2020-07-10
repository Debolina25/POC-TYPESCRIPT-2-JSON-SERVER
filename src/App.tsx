import React from 'react';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';
import CreateCustomer from './Components/customer/CreateCustomer';
import Home from './Components/Home';
import EditCustomer from './Components/customer/EditCustomer';

const App: React.FC = () => {
  return (
    <div>
        <nav>
          <ul>
            <li>
              <Link to={'/'}> Home </Link>
            </li>
            <li>
              <Link to={'/create'}> Create Customer </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path={'/create'} exact component={CreateCustomer} />
          <Route path={'/'} exact component={Home} />
          <Route path={'/edit/:id'} exact component={EditCustomer} />
        </Switch>
      </div>
  );
}

export default App;
