import './App.css';

import Album from './Album';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollableTabsButtonForce from './ScrollableTabsButtonForce';
import InputAdornments from './InputAdornments';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Album />
          </Route>
          <Route path="/crypto">
            <ScrollableTabsButtonForce />
          </Route>
          <Route path="/form">
            <InputAdornments />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
